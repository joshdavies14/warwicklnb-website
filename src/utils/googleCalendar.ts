/** Loads google calendar api
 * @return {Promise} resolves when api is successfully loaded and rejects when an error occurs
 */
function loadCalendarAPI() {
    const apiKey = import.meta.env.VITE_CALENDAR_API_KEY;
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "https://apis.google.com/js/api.js";
        document.body.appendChild(script);
        script.onload = () => {
            // @ts-ignore: Cannot find name 'gapi'.
            gapi.load("client", () => {
                // @ts-ignore: Cannot find name 'gapi'.
                gapi.client.init({ apiKey: apiKey }).then(() => {
                    // @ts-ignore: Cannot find name 'gapi'.
                    gapi.client
                        .load(
                            "https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest"
                        )
                        .then(
                            () =>
                                resolve(
                                    "GAPI client successfully loaded for API"
                                ),
                            (err: any) => reject(err)
                        );
                });
            });
        };
    });
}

/** query calendar API for events
 * @param {number} [maxResults=1000] maximum number of events returned, can be up to 2500, currently doesn't support more events
 * @returns {Object} see https://developers.google.com/calendar/v3/reference/events/list for shape of response object
 */
function getEventsList(maxResults = 1000) {
    const calendarId = import.meta.env.VITE_CALENDAR_ID;
    // @ts-ignore: Cannot find name 'gapi'.
    return gapi.client.calendar.events.list({
        calendarId: calendarId,
        maxResults: maxResults,
    });
}

interface CalendarEvent {
    id: string;
    startDate: Date;
    endDate: Date;
    title: string;
    tooltip: string;
    url: string;
    classes: Array<string>;
    style: string;
}

export async function getEventsForCalendar() {
    const calendarEvents: CalendarEvent[] = [];
    let events = [];
    try {
        await loadCalendarAPI();
    } catch (error) {
        console.log(error);
        return [];
    }
    try {
        events = await getEventsList();
        events.result.items.forEach((event: any) => {
            if (event.status !== "cancelled") {
                const calendarEvent: CalendarEvent = {
                    id: event.id,
                    startDate: new Date(event.start.dateTime),
                    endDate: new Date(event.end.dateTime),
                    title: event.summary,
                    tooltip:
                        event.summary +
                        (event.description ? " - " + event.description : ""),
                    url: event.htmlLink,
                    classes: [],
                    style: "",
                };
                calendarEvents.push(calendarEvent);
            }
        });
    } catch (error) {
        console.log(error);
        return [];
    }
    return calendarEvents;
}
