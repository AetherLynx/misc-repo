// ==UserScript==
// @name         NubeScript
// @namespace    http://tampermonkey.net/
// @version      2025-12-05
// @description  try to take over the world!
// @author       You
// @match        https://nubeli-cash.firebaseapp.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=firebaseapp.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    //  SCRIPT V4.1

    const SET_PROFILE = 2

    if (SET_PROFILE == 1) {
        var Settings = {

            ShowConsoleLogs: false,             // show console logs
            CopyPhoneNumRightClick: true,       // copy phone numbers to clipboard by right clicking them
            CheckForAppTripsDefault: false,     // default option for highlighting app trips
            AppTripsToggleButton: true,         // display the 'Check For App Trips' button

            HighlightTripsFrom: [               // whose trips to highlight in the dashboard
                "Samuel Martinez",
                "Santiago Martinez"
            ],

            ButtonSoundPlayWhenNew: true,       // display the 'Ping NEW' button
            SoundPlayWhenNew: true,             // default option to constantly play a sound when a highlighted trip is on 'NEW'
            SoundPlayWhenArrived: true,         // play a sound when a highlighted trip changes to 'ARRIVED'
            SoundPlayWhenStarted: true,         // play a sound when a highlighted trip changes from 'ARRIVED' to 'STARTED'

            SoundForNewTrip: "https://github.com/AetherLynx/misc-repo/raw/refs/heads/main/0215%20-%20More%20Menu%20Stuff.mp3",
            VolumeNewTrip: 0.06,                 // volume: 0 - 1 (e.g: 0.5, 0.1, 0.9)

            SoundForNewAppTrip: "https://github.com/AetherLynx/misc-repo/raw/refs/heads/main/0896%20-%20Surprise%20Box%20&%20Ten-Yeti%20-%20Miss.mp3",
            VolumeNewAppTrip: 0.06,

            SoundForArrivedTrip: "https://github.com/AetherLynx/misc-repo/raw/refs/heads/main/0210%20-%20Menu%20Selection.mp3",
            VolumeArrivedTrip: 0.4,

            SoundForStartedTrip: "https://github.com/AetherLynx/misc-repo/raw/refs/heads/main/0213%20-%20Unknown%20Menu%20Sound.mp3",
            VolumeStartedTrip: 0.4,

            HighlightWhatsappTrip: true,        // highlight a trip if the currently open whatsapp chat matches the phone number (no sound notifications)

            // v2.0 options

            NotificationWhenArrived: false,      // send desktop notification when a trip's arrived and window is unfocused
            Always100Trips: true,               // always render 100 trips (uses dropdown button)

            // v3.0 - v3.1 options

            ShowTimeSinceAccepted: true,        // shows how many minutes have passed since the trip was accepted
            AlertAfter10MinAccepted: true,      // notif alert when it has been 10 mins since accepted trip, and highlight
            ShowTimeSinceArrived: true,         // shows how many minutes have passed since driver's been on arrived
            AlertAfter7MinArrived: true,        // notif alert when it has been 7 mins since arrived

            TimeAlertsForAppTrips: false,       // (toggleable) if to highlight and send sound warnings of the accepted and arrived trips for app trips

            AcceptedWarningInterval: 60,        // counter for playing the accepted warning beep (seconds)
            ArrivedWarningInterval: 60,         // counter for playing the arrived warning beep (seconds)

            SoundForAcceptedAlert: "https://github.com/AetherLynx/misc-repo/raw/refs/heads/main/0222%20-%20Almost%20Like%20You%20Failed%20To%20Select.mp3",
            VolumeAcceptedAlert: 0.4,

            SoundForArrivedAlert: "https://github.com/AetherLynx/misc-repo/raw/refs/heads/main/0107%20-%20Getting%20An%20Item.mp3",
            VolumeArrivedAlert: 0.4,

            NewSettingsMenu: true,              // show new settings menu next to whatsapp chat
            HighlightTodaysTrips: true,        // (toggleable) if to highlight todays trips and desaturate trips which arent || 3.2: now works for ALL trips

            // v3.2 options

            ShowAssignDriverBeforehand: true,   // v3.5: shows a tag on the leftmost side showing who is the selected driver when trip is NEW / RESERVED or ACCEPTED
            ShowColoredWhatsAppChats: true,      // highlight the whatsapp chats based on the booking status of trips matching the phone number

            // v3.3 options

            WhatsappTagsSystem: true,           // adds a new list on every whatsapp chat so you can tag and order the whatsapp chats for optimizing workflow

            // v3.5 options

            ShowTimeSinceBooked: true,          // shows timestamp of elapsed time of a trip based on its Booking Date time

            // v4.0 options

            WhatsappTagList: [                  // tags for the whatsapp chats
                "COTIZANDO VIAJE",
                "VIAJE EN CAMINO",
                "VIAJE EN DOUBLE TRIP",
                "VIAJE RESERVADO",
                "VIAJE COMENZADO",
                "CHAT DE SOPORTE",
                "MANTENER CHAT ABIERTO"
            ],

            ShowActiveBookingStats: true,       // show statistics alongisde the Current and Today bookings displaying number of New, Accepted, and Started trips
            UseTermLookupOnSettings: true,      // enables 2 text fields on the settings menu, value set on the fields will be looked upon for each trip

            SoundForLookUpAlert: "https://github.com/AetherLynx/misc-repo/raw/refs/heads/main/1064%20-%20HP%20Healing%20(Food).mp3",
            VolumeLookupAlert: 0.4,

            LookupWarningInterval: 15,          // counter for playing the arrived warning beep (seconds)

            ShowBookingIcon: true,              // show a booking icon next to the booking timestamp if a trip is a Book Later
        }
    }


    if (SET_PROFILE == 2) {
        Settings = {

            ShowConsoleLogs: false,             // show console logs
            CopyPhoneNumRightClick: true,       // copy phone numbers to clipboard by right clicking them
            CheckForAppTripsDefault: false,     // default option for highlighting app trips
            AppTripsToggleButton: true,         // display the 'Check For App Trips' button

            HighlightTripsFrom: [               // whose trips to highlight in the dashboard
                "Santiago Martinez",
                "Nombre ejemplo",
                "Nombre ejemplo",
            ],

            ButtonSoundPlayWhenNew: true,       // display the 'Ping NEW' button
            SoundPlayWhenNew: true,             // default option to constantly play a sound when a highlighted trip is on 'NEW'
            SoundPlayWhenArrived: true,         // play a sound when a highlighted trip changes to 'ARRIVED'
            SoundPlayWhenStarted: true,         // play a sound when a highlighted trip changes from 'ARRIVED' to 'STARTED'

            SoundForNewTrip: "https://audio.jukehost.co.uk/IwFHTvemIJJtQIuqvvSTbKAgMO0rTFWI",
            VolumeNewTrip: 0.08,                 // volume: 0 - 1 (e.g: 0.5, 0.1, 0.9)

            SoundForNewAppTrip: "https://audio.jukehost.co.uk/IwFHTvemIJJtQIuqvvSTbKAgMO0rTFWI",
            VolumeNewAppTrip: 0.08,

            SoundForArrivedTrip: "https://audio.jukehost.co.uk/C8K9PT6sjG7G7VRYv0mWyhV0LhEQQVxt",
            VolumeArrivedTrip: 0.4,

            SoundForStartedTrip: "https://audio.jukehost.co.uk/6ZUIedUF2GUwmECTn18c1Llj4AzkF0jn",
            VolumeStartedTrip: 0.4,

            HighlightWhatsappTrip: true,        // highlight a trip if the currently open whatsapp chat matches the phone number (no sound notifications)

            // v2.0 options

            NotificationWhenArrived: true,      // send desktop notification when a trip's arrived and window is unfocused
            Always100Trips: true,               // always render 100 trips (uses dropdown button)

            // v3.0 - v3.1 options

            ShowTimeSinceAccepted: true,        // shows how many minutes have passed since the trip was accepted
            AlertAfter10MinAccepted: true,      // notif alert when it has been 10 mins since accepted trip, and highlight
            ShowTimeSinceArrived: true,         // shows how many minutes have passed since driver's been on arrived
            AlertAfter7MinArrived: true,        // notif alert when it has been 7 mins since arrived

            TimeAlertsForAppTrips: false,       // (toggleable) if to highlight and send sound warnings of the accepted and arrived trips for app trips

            AcceptedWarningInterval: 60,        // counter for playing the accepted warning beep (seconds)
            ArrivedWarningInterval: 60,         // counter for playing the arrived warning beep (seconds)

            SoundForAcceptedAlert: "https://github.com/AetherLynx/misc-repo/raw/refs/heads/main/0222%20-%20Almost%20Like%20You%20Failed%20To%20Select.mp3",
            VolumeAcceptedAlert: 0.4,

            SoundForArrivedAlert: "https://github.com/AetherLynx/misc-repo/raw/refs/heads/main/0107%20-%20Getting%20An%20Item.mp3",
            VolumeArrivedAlert: 0.4,

            NewSettingsMenu: true,              // show new settings menu next to whatsapp chat
            HighlightTodaysTrips: false,        // (toggleable) if to highlight todays trips and desaturate trips which arent


            // v3.2 options

            ShowAssignDriverBeforehand: true,   // when trip is new, show who's the selected driver before accepted instead of a blank cell
            ShowColoredWhatsAppChats: true,      // highlight the whatsapp chats based on the booking status of trips matching the phone number

            // v3.3 options

            WhatsappTagsSystem: true,           // adds a new list on every whatsapp chat so you can tag and order the whatsapp chats for optimizing workflow

            // v3.5 options

            ShowTimeSinceBooked: true,          // shows timestamp of elapsed time of a trip based on its Booking Date time


            // v4.0 options

            WhatsappTagList: [                  // tags for the whatsapp chats
                "BOOK LATER",
                "DOUBLE TRIP",
                "PENDIENTE CONFIRMACION",
                "FINALIZADO",
                "REPORTE",
                "EN PROGRESO",
            ],

            ShowActiveBookingStats: true,       // show statistics alongisde the Current and Today bookings displaying number of New, Accepted, and Started trips
            UseTermLookupOnSettings: true,      // enables 2 text fields on the settings menu, value set on the fields will be looked upon for each trip

            SoundForLookUpAlert: "https://github.com/AetherLynx/misc-repo/raw/refs/heads/main/1064%20-%20HP%20Healing%20(Food).mp3",
            VolumeLookupAlert: 0.4,

            LookupWarningInterval: 15,          // counter for playing the arrived warning beep (seconds)

            ShowBookingIcon: true,              // show a booking icon next to the booking timestamp if a trip is a Book Later
        }
    }

    var nameTrips = Settings.HighlightTripsFrom;

    const arrivedSound = new Audio(Settings.SoundForArrivedTrip);
    arrivedSound.volume = Settings.VolumeArrivedTrip;

    const startedSound = new Audio(Settings.SoundForStartedTrip);
    startedSound.volume = Settings.VolumeStartedTrip;

    const newtripSound = new Audio(Settings.SoundForNewTrip);
    newtripSound.volume = Settings.VolumeNewTrip;

    const newAppTripSound = new Audio(Settings.SoundForNewAppTrip);
    newAppTripSound.volume = Settings.VolumeNewAppTrip;

    const acceptedAlertSound = new Audio(Settings.SoundForAcceptedAlert);
    acceptedAlertSound.volume = Settings.VolumeAcceptedAlert;

    const arrivedAlertSound = new Audio(Settings.SoundForArrivedAlert);
    arrivedAlertSound.volume = Settings.VolumeArrivedAlert;

    const lookupAlertSound = new Audio(Settings.SoundForLookUpAlert);
    lookupAlertSound.volume = Settings.VolumeLookupAlert;

    // DATA
    const rootStyles = window.getComputedStyle(document.documentElement);
    const arrivedText = "span.p-tag-value";
    var arrivedTrips = 0; //arrived trips counter
    var firstChecker = 0; //first checker
    var csscolour = null;
    const wspContQuery = ".flex.bg-white.align-items-center.justify-content-between.w-full.shadow-2.z-1"; //for IN THE CHAT
    const masterWspContQuery = ".chat-container"; //for OUT THE CHAT
    const wspChatgroupsQuery = ".flex.align-items-center.bg-white.p-3.gap-3.border-bottom-1.surface-border.cursor-pointer.mb-1"
    const wspChatHeaderQuery = ".flex.bg-white.align-items-center.justify-content-between.w-full.shadow-2.z-1";
    const cancelBtQuery = "button.p-button.p-component.p-button-icon-only.p-button-rounded.p-button-sm.p-button-danger"
    const warningIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Im0xMi41OTMgMjMuMjU4bC0uMDExLjAwMmwtLjA3MS4wMzVsLS4wMi4wMDRsLS4wMTQtLjAwNGwtLjA3MS0uMDM1cS0uMDE2LS4wMDUtLjAyNC4wMDVsLS4wMDQuMDFsLS4wMTcuNDI4bC4wMDUuMDJsLjAxLjAxM2wuMTA0LjA3NGwuMDE1LjAwNGwuMDEyLS4wMDRsLjEwNC0uMDc0bC4wMTItLjAxNmwuMDA0LS4wMTdsLS4wMTctLjQyN3EtLjAwNC0uMDE2LS4wMTctLjAxOG0uMjY1LS4xMTNsLS4wMTMuMDAybC0uMTg1LjA5M2wtLjAxLjAxbC0uMDAzLjAxMWwuMDE4LjQzbC4wMDUuMDEybC4wMDguMDA3bC4yMDEuMDkzcS4wMTkuMDA1LjAyOS0uMDA4bC4wMDQtLjAxNGwtLjAzNC0uNjE0cS0uMDA1LS4wMTgtLjAyLS4wMjJtLS43MTUuMDAyYS4wMi4wMiAwIDAgMC0uMDI3LjAwNmwtLjAwNi4wMTRsLS4wMzQuNjE0cS4wMDEuMDE4LjAxNy4wMjRsLjAxNS0uMDAybC4yMDEtLjA5M2wuMDEtLjAwOGwuMDA0LS4wMTFsLjAxNy0uNDNsLS4wMDMtLjAxMmwtLjAxLS4wMXoiLz48cGF0aCBmaWxsPSIjNjVhMzBkIiBkPSJNMTIgMmM1LjUyMyAwIDEwIDQuNDc3IDEwIDEwcy00LjQ3NyAxMC0xMCAxMFMyIDE3LjUyMyAyIDEyUzYuNDc3IDIgMTIgMm0wIDEzYTEgMSAwIDEgMCAwIDJhMSAxIDAgMCAwIDAtMm0wLTlhMSAxIDAgMCAwLS45OTMuODgzTDExIDd2NmExIDEgMCAwIDAgMS45OTMuMTE3TDEzIDEzVjdhMSAxIDAgMCAwLTEtMSIvPjwvZz48L3N2Zz4="
    var tabFocused = false;
    var acceptedAlertCounter = 0;
    var arrivedAlertCounter = 0;
    var lookupAlertCounter = 0;
    const minsForAccepted = 10;
    const minsForArrived = 7;
    const actBookSpanQuery = "span.text-xl.text-900.font-bold.mr-3";
    const bookingsCategoryQuery = "span.p-buttonset"
    var lookupCooldown = false;
    const cellCheckQuery = "i.pi.pi-check"

    var lookupData1 = "";
    var lookupData2 = "";

    function hasDuplicates(arr, value) {
        return arr.filter(item => item === value).length > 1;
    }


    const whatsappClasses = {
        "ACCEPTED": "whatsappstate_accepted",
        "ARRIVED": "whatsappstate_arrived",
        "STARTED": "whatsappstate_started",
        "NEW": "whatsappstate_new",
        "REACHED": "whatsappstate_reached_paid",
        "REACHEDEXTRA": "whatsappstate_reached_paid",
        "PAID": "whatsappstate_reached_paid"
    }

    var whatsappSelectList = `
    <select name='wspChatTag'>
    `

    var tagArray = Settings.WhatsappTagList

    tagArray.forEach((element, index) => {
        let fIndex = index + 1;
        whatsappSelectList += `\n` + `<option value='${fIndex}'>${element}</option>`
    });

    whatsappSelectList += `\n` + `</select>`

    var whatsappTagsNumbers = {
        "numberExample": "17",
    };

    var changingDriverList = [
        "Jane Doe"
    ]

    const today = new Date().toLocaleDateString('en-US', { timeZone: 'America/New_York', month: 'numeric', day: 'numeric', year: 'numeric' });

    const originalConsoleLog = console.log;

    var isSettingsVisible = false;

    const TripsPageURL = "https://nubeli-cash.firebaseapp.com/dashboard-beta";
    const IncidentsPageURL = "https://nubeli-cash.firebaseapp.com/incidentreports";

    document.addEventListener("visibilitychange", () => {
        tabFocused = !document.hidden;
    });

    window.addEventListener("blur", () => {
        tabFocused = false;
    });

    window.addEventListener("focus", () => {
        tabFocused = true;
    });


    if (!Settings.ShowConsoleLogs) {
        console.log("-- disabling console logs --");
        console.log = function () { };
    }

    if (Settings.HighlightWhatsappTrip) {
        highlightWhatsapp();
        setInterval(highlightWhatsapp, 200)
    }

    setInterval(() => {
        tickFunction("new");
    }, 500)

    setInterval(secondsTick, 1000);

    createSettingButtons();

    function secondsTick() {
        acceptedAlertCounter++;
        arrivedAlertCounter++;
        lookupAlertCounter++;
    }

    if (Settings.Always100Trips) {
        setInterval(() => {

            if (window.location.href !== TripsPageURL) return;
            if (!Settings.Always100Trips) return; //because it now updates in the new settings

            const allDropdowns = document.querySelectorAll('[data-pc-name="dropdown"]');

            allDropdowns.forEach((dropdown) => {
                const label = dropdown.querySelector('.p-dropdown-label');

                // Only target the one currently showing "20"
                if (label && label.textContent.trim() === "20") {
                    const trigger = dropdown.querySelector('.p-dropdown-trigger');

                    if (trigger) {
                        // 1. Open the menu
                        trigger.click();

                        // 2. Immediate micro-task to click the option
                        setTimeout(() => {
                            const options = document.querySelectorAll('.p-dropdown-item');
                            const targetOption = Array.from(options).find(opt => opt.textContent.trim() === "100");

                            if (targetOption) {
                                targetOption.click(); // This triggers the framework's internal filter
                                console.log("Internal filter forced to 100");
                            } else {
                                // If 100 isn't found, close it so it doesn't stay open
                                trigger.click();
                            }
                        }, 10); // 10ms is invisible to the human eye but enough for the DOM
                    }
                }
            });
        }, 5000); // Check every 3 seconds
    }


    function highlightWhatsapp() {
        const wspCont = document.querySelector(wspContQuery);

        if (wspCont) {
            var wspNumber = wspCont.querySelector(`a[href^="tel:"]`);
            wspNumber = formatPhoneNum(wspNumber.getAttribute('href'), true);

            document.querySelectorAll(`a[href*="${wspNumber}"]`).forEach(link => {
                link.closest('tr[role="row"]')?.classList.add("whatsapp-highlight");
            });
        } else {
            removeClasses("whatsapp-highlight");
        }
    }

    function removeAllWspHl() {
        const removeHighlights = document.querySelectorAll(".whatsapp-highlight")
        if (removeHighlights) {
            removeHighlights.forEach(entry => {
                entry.classList.remove("whatsapp-highlight")
            })
        }
    }

    function removeClasses(classToRemove) {
        const array = document.querySelectorAll("." + classToRemove)
        if (array) {
            array.forEach(element => {
                element.classList.remove(classToRemove)
            });
        }
    }

    var statistics = [0, 0, 0, 0, 0]; // new accepted arrived started reachedpaid/reachedpaidextra

    function tickFunction(query) {
        if (query == "new") {
            firstChecker = 0;
            statistics = [0, 0, 0, 0, 0]

            if (window.location.href !== TripsPageURL) return;

            const activeBookButton = document.querySelector('button[aria-label="Active"].p-button.p-component.p-disabled.p-button-secondary')


            if (Settings.ShowColoredWhatsAppChats) {
                const trip_wspCont = document.querySelector(masterWspContQuery)

                if (trip_wspCont) {
                    const chatGroups = trip_wspCont.querySelectorAll(wspChatgroupsQuery);

                    if (chatGroups) {
                        chatGroups.forEach(element => {
                            const checkClass = Object.values(whatsappClasses).find(cls => element.classList.contains(cls));

                            if (checkClass) {
                                element.classList.remove(checkClass)
                            }
                        });
                    }
                }
            }

            document.querySelectorAll(cancelBtQuery).forEach(button => {
                const row = button.closest('tr[role="row"]');
                var reviewingApp = false;
                var reviewingOwn = false;

                if (row) {
                    const cells = row.querySelectorAll('td[role="cell"]');
                    const raw1 = cells[2]?.textContent.trim(); // "MM/DD/YYYY, 2:02:00 PM"
                    const bookingDate = raw1?.split(',')[0].trim()           // "3/12/2026"
                    const bookingHour = raw1?.split(',')[1].trim()           // "2:02:00 PM"
                    var tripBookedT = bookingHour.trim().replace(/^\[\d+m\]\s*/, '');
                    var tripPhonenum = cells[6]?.querySelector(`a[href^="tel:"]`);
                    tripPhonenum = formatPhoneNum(tripPhonenum.getAttribute('href'), true);
                    // 6 7
                    const driversName = cells[7]?.querySelector('span')?.textContent.trim()
                    //const carType = cells[8]?.textContent.trim()
                    //const pickupAddress = cells[9]?.querySelector('span')?.textContent.trim()
                    //const dropoffAddress = cells[11]?.querySelector('span')?.textContent.trim()
                    const tripFrom = cells[13]?.textContent.trim()
                    var tripAcceptedT = cells[14]?.textContent.trim().replace(/^\[\d+m\]\s*/, '');
                    var tripArrivedT = cells[15]?.textContent.trim().replace(/^\[\d+m\]\s*/, '');
                    //const tripStartedT = cells[16]?.textContent.trim().replace(/^\[\d+m\]\s*/, '');
                    //const paymentType = cells[18]?.textContent.trim()
                    const isBookLater = cells[35]?.querySelector(cellCheckQuery);
                    const selectedDriver = cells[39]?.querySelector('span')?.textContent.trim()

                    lookupData1 = document.getElementById("settings_LOOKUP1").value;
                    lookupData2 = document.getElementById("settings_LOOKUP2").value;

                    // cleaning the times from NAN

                    tripBookedT = tripBookedT.replaceAll("[NaNm] ", "")
                    tripAcceptedT = tripAcceptedT.replaceAll("[NaNm] ", "")
                    tripArrivedT = tripArrivedT.replaceAll("[NaNm] ", "")

                    //console.log("["+driversName+"] -> ["+selectedDriver+"]"); TESTING

                    if (nameTrips.includes(tripFrom)) {
                        if (tripFrom !== "App Passenger") {
                            //HIGHLIGHTED TRIP, ITS OURS
                            csscolour = rootStyles.getPropertyValue('--own-booking-color').trim();
                            row.classList.add("owntrip");
                            reviewingOwn = true;
                        } else {
                            //ITS AN APP TRIP :YAWN:
                            csscolour = rootStyles.getPropertyValue('--app-booking-color').trim();
                            row.classList.add("alt-owntrip");
                            reviewingApp = true;
                        }

                        //row.style.setProperty('background-color', csscolour, 'important');
                    }

                    if (row.classList.contains("whatsapp-highlight")) {
                        reviewingOwn = true;
                    }

                    const tripTag = row.querySelector(arrivedText);

                    if (tripTag) {
                        if (tripTag.textContent == "ARRIVED" && reviewingOwn) {
                            firstChecker++;
                        } else if (tripTag.textContent == "NEW" && activeBookButton) {

                            if (Settings.SoundPlayWhenNew && reviewingOwn) {
                                newtripSound.play();
                            }

                            if (Settings.SoundPlayWhenNew && reviewingApp && Settings.CheckForAppTripsDefault) {
                                newAppTripSound.play();
                            }
                        }

                        if (tripTag.textContent == "NEW" || tripTag.textContent == "RESERVED" || tripTag.textContent == "ACCEPTED") {
                            if (Settings.ShowAssignDriverBeforehand && selectedDriver) {
                                if (!(cells[3].querySelector('span[isdrivertag="true"]'))) {
                                    const driverSelectedTag = document.createElement('span')
                                    driverSelectedTag.classList.add("selectedDriverTag");

                                    driverSelectedTag.textContent = selectedDriver;
                                    driverSelectedTag.setAttribute("isdrivertag", "true")

                                    cells[3].prepend(driverSelectedTag)
                                }
                            }
                        }

                        statistics[0] += tripTag.textContent == "NEW" ? 1 : 0;
                        statistics[1] += tripTag.textContent == "ACCEPTED" ? 1 : 0;
                        statistics[2] += tripTag.textContent == "ARRIVED" ? 1 : 0;
                        statistics[3] += tripTag.textContent == "STARTED" ? 1 : 0;
                        statistics[4] += tripTag.textContent == "FINISHING" ? 1 : 0;
                        statistics[4] += tripTag.textContent == "REACHED" ? 1 : 0;
                        statistics[4] += tripTag.textContent == "PAID" ? 1 : 0;
                        statistics[4] += tripTag.textContent == "REACHEDEXTRA" ? 1 : 0;
                    }

                    if (Settings.ShowColoredWhatsAppChats) {
                        const trip_wspCont = document.querySelector(masterWspContQuery)

                        if (trip_wspCont) {
                            const chatGroups = trip_wspCont.querySelectorAll(wspChatgroupsQuery);

                            if (chatGroups) {
                                chatGroups.forEach(element => {
                                    var chatNumber = element.querySelector(`a[href^="tel:"]`);
                                    chatNumber = formatPhoneNum(chatNumber.getAttribute('href'), true);

                                    var debug = false;
                                    if (debug) {
                                        // trigger false match ((doesnt work nvm))
                                        chatNumber = "16315753361";
                                    }

                                    if (chatNumber == tripPhonenum && tripTag) {
                                        if (Object.keys(whatsappClasses).includes(tripTag.textContent)) {
                                            element.classList.add(whatsappClasses[tripTag.textContent])
                                        }

                                        if (tripTag.textContent == "ARRIVED" && !reviewingOwn) {
                                            firstChecker++;
                                        } else if (tripTag.textContent == "NEW" && activeBookButton && !reviewingOwn) {
                                            if (Settings.SoundPlayWhenNew) {
                                                newtripSound.play();
                                            }
                                        }

                                    }
                                });
                            }
                        }
                    }

                    if (Settings.WhatsappTagsSystem) {
                        const wspCont = document.querySelector(masterWspContQuery)

                        if (wspCont) {
                            const chatGroups = wspCont.querySelectorAll(wspChatgroupsQuery);
                            if (chatGroups) {

                                chatGroups.forEach(element => {
                                    var chatNumber = element.querySelector(`a[href^="tel:"]`);
                                    chatNumber = formatPhoneNum(chatNumber.getAttribute('href'), true);

                                    if (!(element.getAttribute("alreadyHasTags") == "true")) {
                                        element.insertAdjacentHTML("beforeend", whatsappSelectList);
                                        selectElement = element.querySelector("select");

                                        if (chatNumber in whatsappTagsNumbers) {
                                            console.log("Value found in array! Changing " + chatNumber + "'s to " + whatsappTagsNumbers[chatNumber] + ".")
                                            selectElement.value = whatsappTagsNumbers[chatNumber];
                                        } else {
                                            console.log(chatNumber + " NOT FOUND IN OBJECT, defaulting. Current object: ");
                                            console.log(whatsappTagsNumbers);
                                        }

                                        selectElement.addEventListener("change", function () {
                                            whatsappTagsNumbers[chatNumber] = this.value;
                                            console.log("Change in array! Inserting " + this.value + " to " + chatNumber)
                                            console.log(whatsappTagsNumbers);
                                        })

                                        selectElement.addEventListener("click", function (e) {
                                            e.stopPropagation();
                                        });

                                        element.style.flexWrap = "wrap";
                                        selectElement.style.padding = "5px";
                                        selectElement.style.borderRadius = "6px";
                                        selectElement.style.width = "100%";
                                        element.setAttribute("alreadyHasTags", "true");
                                    } else {
                                        var selectElement = element.querySelector("select");

                                        if (!selectElement.value) return;

                                        if (selectElement.value !== whatsappTagsNumbers[chatNumber]) {
                                            console.log("Select does not correspond! " + selectElement.value + " ==NOT== " + whatsappTagsNumbers[chatNumber])
                                            selectElement.value = whatsappTagsNumbers[chatNumber];
                                        }
                                    }
                                })
                                /*
                                Object.keys(whatsappTagsNumbers).forEach(function (key) {
                                    if (!currentNumberList.includes(key)) {
                                        delete whatsappTagsNumbers[key];
                                        console.log("NOT FOUND, DELETING: " + whatsappTagsNumbers[key] + ", new OBJECT: ")
                                        console.log(whatsappTagsNumbers)
                                    }
                                });
                                */
                            }

                        }
                    }

                    if (Settings.ShowTimeSinceAccepted) {
                        if (tripTag.textContent == "ACCEPTED" || tripTag.textContent == "ARRIVED") {
                            if (!(cells[14].querySelector('span[istimedtxt="true"]'))) {
                                if (tripAcceptedT !== "--") {
                                    const nyTime = getNYTime();
                                    let acceptedTimeDiff = minuteDiff(tripAcceptedT, nyTime);

                                    if (Number.isNaN(acceptedTimeDiff)) {
                                        console.log("ERROR NAN: Accepted time: " + tripAcceptedT + " / Actual Time: " + nyTime)
                                    }

                                    const timeDiffTxt = document.createElement('span')
                                    timeDiffTxt.classList.add("timeDiffAccepted");

                                    timeDiffTxt.textContent = "[" + acceptedTimeDiff + "m] ";
                                    timeDiffTxt.setAttribute("istimedtxt", "true")

                                    cells[14].prepend(timeDiffTxt)
                                }
                            } else {
                                const nyTime = getNYTime();
                                const textGet = cells[14].querySelector('span[istimedtxt="true"]')

                                let acceptedTimeDiff = minuteDiff(tripAcceptedT, nyTime)

                                if (Number.isNaN(acceptedTimeDiff)) {
                                    console.log("ERROR NAN: Accepted time: " + tripAcceptedT + " / Actual Time: " + nyTime)
                                }

                                textGet.textContent = "[" + acceptedTimeDiff + "m] ";

                                if (Settings.AlertAfter10MinAccepted && (reviewingOwn || reviewingApp)) {
                                    if (Settings.TimeAlertsForAppTrips == false && row.classList.contains("acceptedWarn-highlight") && reviewingApp) {
                                        row.classList.remove("acceptedWarn-highlight");
                                    }

                                    if (Settings.TimeAlertsForAppTrips == false && reviewingApp) return;

                                    const theTime = minuteDiff(tripAcceptedT, nyTime);

                                    if (theTime >= minsForAccepted && tripTag.textContent !== "ARRIVED") {
                                        row.classList.add("acceptedWarn-highlight");

                                        if (acceptedAlertCounter >= Settings.AcceptedWarningInterval) {
                                            acceptedAlertCounter = 0;
                                            acceptedAlertSound.play();
                                        }
                                    }
                                }
                            }
                        }
                    }

                    if (Settings.ShowTimeSinceArrived) {
                        if (tripTag.textContent == "ARRIVED") {
                            row.classList.remove("acceptedWarn-highlight")
                            if (!(cells[15].querySelector('span[istimedtxt="true"]'))) {
                                if (tripArrivedT !== "--") {
                                    const nyTime = getNYTime();

                                    const timeDiffTxt = document.createElement('span')
                                    timeDiffTxt.classList.add("timeDiffArrived");

                                    timeDiffTxt.textContent = "[" + minuteDiff(tripArrivedT, nyTime) + "m] ";
                                    timeDiffTxt.setAttribute("istimedtxt", "true")

                                    cells[15].prepend(timeDiffTxt)
                                }
                            } else {
                                const nyTime = getNYTime();
                                const textGet = cells[15].querySelector('span[istimedtxt="true"]')

                                textGet.textContent = "[" + minuteDiff(tripArrivedT, nyTime) + "m] ";

                                if (Settings.AlertAfter7MinArrived && (reviewingOwn || reviewingApp)) {
                                    if (Settings.TimeAlertsForAppTrips == false && row.classList.contains("arrivedWarn-highlight") && reviewingApp) {
                                        row.classList.remove("arrivedWarn-highlight");
                                    }

                                    if (Settings.TimeAlertsForAppTrips == false && reviewingApp) return;

                                    const theTime = minuteDiff(tripArrivedT, nyTime);

                                    if (theTime >= minsForArrived) {
                                        row.classList.add("arrivedWarn-highlight");

                                        if (arrivedAlertCounter >= Settings.ArrivedWarningInterval) {
                                            arrivedAlertCounter = 0;
                                            arrivedAlertSound.play();
                                            //console.log("trying to play arrived........")
                                        }
                                    }
                                }
                            }
                        } else {
                            row.classList.remove("arrivedWarn-highlight")
                        }
                    }

                    if (Settings.ShowBookingIcon) {
                        if (!(cells[3].querySelector('img[isbookingicon="true"]')) && isBookLater) {
                            const bookIcon = document.createElement('img')
                            bookIcon.setAttribute("isbookingicon", "true")
                            bookIcon.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIgMTJDMiA2LjQ3NyA2LjQ3NyAyIDEyIDJzMTAgNC40NzcgMTAgMTBzLTQuNDc3IDEwLTEwIDEwUzIgMTcuNTIzIDIgMTJtMTEtNWExIDEgMCAxIDAtMiAwdjMuNzY0YTMgMyAwIDAgMCAxLjY1OCAyLjY4M2wyLjg5NSAxLjQ0N2ExIDEgMCAxIDAgLjg5NC0xLjc4OGwtMi44OTQtMS40NDhhMSAxIDAgMCAxLS41NTMtLjg5NHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==";
                            bookIcon.setAttribute("width", "24px")
                            bookIcon.setAttribute("height", "24px")

                            cells[3].prepend(bookIcon)
                        }
                    }

                    if (Settings.ShowTimeSinceBooked) {
                        if (!(cells[3].querySelector('span[istimedtxt="true"]'))) {
                            if (tripBookedT !== "--") {
                                const nyTime = getNYTime();

                                const timeDiffTxt = document.createElement('span')
                                timeDiffTxt.classList.add("timeDiffBooked");

                                timeDiffTxt.textContent = "[" + minuteDiff(tripBookedT, nyTime) + "m] ";
                                timeDiffTxt.setAttribute("istimedtxt", "true")

                                cells[3].prepend(timeDiffTxt)
                            }
                        } else {
                            const nyTime = getNYTime();
                            const textGet = cells[3].querySelector('span[istimedtxt="true"]')

                            textGet.textContent = "[" + minuteDiff(tripBookedT, nyTime) + "m] ";
                        }
                    }

                    if (Settings.HighlightTodaysTrips) {
                        if (bookingDate !== today) {
                            row.classList.add("filterHide")
                        }
                    }

                    if (Settings.ShowActiveBookingStats) {
                        const actBookSpan = document.querySelector(actBookSpanQuery);
                        const parentCont = actBookSpan.parentElement;

                        if (!activeBookButton) {
                            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!! couldnt find active book button! aborting")
                            return;
                        }

                        if (!document.getElementById("statsNEW")) {
                            const stats_NewTrips = document.createElement("span");
                            stats_NewTrips.id = "statsNEW";

                            stats_NewTrips.textContent = "NEW: ?"
                            stats_NewTrips.classList.add("booksStatisticsCont")
                            stats_NewTrips.style.outlineColor = "#ebad28"

                            parentCont.append(stats_NewTrips);
                            console.log("¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡ appended statsNEW")
                        }


                        if (!document.getElementById("statsACCEPTED")) {
                            const stats_AccTrips = document.createElement("span");
                            stats_AccTrips.id = "statsACCEPTED";

                            stats_AccTrips.textContent = "ACCEPTED: ?"
                            stats_AccTrips.classList.add("booksStatisticsCont")
                            stats_AccTrips.style.outlineColor = "#5174d4"

                            parentCont.append(stats_AccTrips);
                        }


                        if (!document.getElementById("statsARRIVED")) {
                            const stats_ArrTrips = document.createElement("span");
                            stats_ArrTrips.id = "statsARRIVED";

                            stats_ArrTrips.textContent = "ARRIVED: ?"
                            stats_ArrTrips.classList.add("booksStatisticsCont")
                            stats_ArrTrips.style.outlineColor = "#bd3d34"

                            parentCont.append(stats_ArrTrips);
                        }


                        if (!document.getElementById("statsSTARTED")) {
                            const stats_StaTrips = document.createElement("span");
                            stats_StaTrips.id = "statsSTARTED";

                            stats_StaTrips.textContent = "STARTED: ?"
                            stats_StaTrips.classList.add("booksStatisticsCont")
                            stats_StaTrips.style.outlineColor = "#56ad3b"

                            parentCont.append(stats_StaTrips);
                        }


                        if (!document.getElementById("statsNEAREND")) {
                            const stats_FinTrips = document.createElement("span");
                            stats_FinTrips.id = "statsNEAREND";

                            stats_FinTrips.textContent = "FINISHING: ?"
                            stats_FinTrips.classList.add("booksStatisticsCont")
                            stats_FinTrips.style.outlineColor = "#407c2e"
                            stats_FinTrips.style.outlineStyle = "dotted";

                            parentCont.append(stats_FinTrips);
                        }
                    }

                    if (Settings.UseTermLookupOnSettings) {
                        if (!lookupCooldown) {
                            let setMode = 0; // 0 = no lookie / 1 = lookie for one term / 2 = lookie both terms case match
                            var isOneEmpty = false;
                            var singleString = "";
                            const lookupTextField1 = document.getElementById("settings_LOOKUP1");
                            const lookupTextField2 = document.getElementById("settings_LOOKUP2");

                            var textOnTrip = row.textContent;
                            var match = false;

                            if (!lookupData1 || lookupData1 == " ") {
                                lookupTextField1.value = "";
                                isOneEmpty = true;
                            } else {
                                setMode++;
                            }

                            if (!lookupData2 || lookupData2 == " ") {
                                lookupTextField2.value = "";
                            } else {
                                setMode++;
                            }

                            if (setMode == 0) {

                                const array = document.querySelectorAll(".lookup-highlight");

                                array.forEach(element => {
                                    element.classList.remove("lookup-highlight");
                                });
                                return;

                            } else if (setMode == 1) {

                                singleString = isOneEmpty == false ? lookupData1 : lookupData2;
                                match = textOnTrip.includes(singleString) == true ? true : false;

                            } else if (setMode == 2) {

                                if (textOnTrip.includes(lookupData1) && textOnTrip.includes(lookupData2)) {
                                    match = true;
                                }

                            }

                            if (match) {

                                if (!row.classList.contains("lookup-highlight")) {
                                    row.classList.add("lookup-highlight");
                                }

                                if (lookupAlertCounter >= Settings.LookupWarningInterval) {
                                    lookupAlertCounter = 0;
                                    lookupAlertSound.play();
                                }

                            } else {

                                if (row.classList.contains("lookup-highlight")) {
                                    row.classList.remove("lookup-highlight");
                                }

                            }
                        }
                    }
                }
            })

            // STATISTICS
            if (activeBookButton) {
                document.getElementById("statsNEW").textContent = "NEW: " + statistics[0];
                document.getElementById("statsACCEPTED").textContent = "ACCEPTED: " + statistics[1];
                document.getElementById("statsARRIVED").textContent = "ARRIVED: " + statistics[2];
                document.getElementById("statsSTARTED").textContent = "STARTED: " + statistics[3];
                document.getElementById("statsNEAREND").textContent = "FINISHING: " + statistics[4];

                // higher difference means there's a new arrived trip
                // lower difference means an arrived trip changed/got canceled
                // equal values means no difference, trips are the same

                if (firstChecker > arrivedTrips && Settings.SoundPlayWhenArrived) {
                    arrivedSound.play();

                    if (!tabFocused) {
                        if (Settings.NotificationWhenArrived) {
                            notifyMe(warningIcon, "NubeLi", "Nuevo viaje en arrived (" + firstChecker + " viajes)");
                        }
                    }
                }

                if (firstChecker < arrivedTrips && Settings.SoundPlayWhenArrived) {
                    startedSound.play();
                }

                if (firstChecker !== arrivedTrips) {
                    arrivedTrips = firstChecker;
                    firstChecker = 0;
                }
            }

            if (lookupCooldown) {
                lookupCooldown = false;
            }

            if (Settings.CheckForAppTripsDefault == false) {
                const removeApps = document.querySelectorAll(".alt-owntrip");
                console.log(removeApps);

                removeApps.forEach(element => {
                    console.log("REMOVING CLASS APP")
                    element.classList.remove("alt-owntrip");
                });
            }

            if (Settings.HighlightTodaysTrips == false) {
                const removeHighlights = document.querySelectorAll(".filterHide");

                removeHighlights.forEach(element => {
                    console.log("REMOVING FILTER HIDE")
                    element.classList.remove("filterHide");
                });
            }
        }
    }

    // NEW CHECKER BUTTON //
    function createSettingButtons() {

        if (Settings.NewSettingsMenu) {
            const buttonID = "openSettingsMenu";

            const settingsOpenBT = document.createElement('button');
            settingsOpenBT.id = buttonID;

            const iconImage = document.createElement('img');
            iconImage.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgNDIgNDIiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik02LjYyIDI0LjVjLjQgMS42MiAxLjA2IDMuMTMgMS45MyA0LjQ5bC0yLjQzIDIuNDRjLTEuMDkgMS4wOS0xLjA4IDEuNzQtLjEyIDIuN2wyLjM3IDIuMzdjLjk3Ljk3MSAxLjYzLjk1IDIuNy0uMTJsMi41NS0yLjU2YzEuMi42ODggMi41IDEuMjIgMy44OCAxLjU2djMuMTJjMCAxLjU1LjQ3IDIgMS44MiAyaDMuMzZjMS4zNyAwIDEuODItLjQ4IDEuODItMnYtMy4xMmMxLjM4LS4zNCAyLjY4LS44NyAzLjg4LTEuNTZsMi42MSAyLjYxOWMxLjA4IDEuMDY4IDEuNzI5IDEuMDkgMi42OTkuMTMxbDIuMzgxLTIuMzgxYy45NDktLjk0OS45Ny0xLjYwMi0uMTMxLTIuNjk5bC0yLjUtMi41YTE0LjcgMTQuNyAwIDAgMCAxLjkzOC00LjQ5aDMuMzAyYzEuMzY4IDAgMS44MTgtLjQ4IDEuODE4LTJ2LTNjMC0xLjQ4LS4zOTMtMi0xLjgxOC0yaC0zLjMwMmMtLjM0LTEuMzgtLjg3LTIuNjgtMS41NjItMy44OGwyLjM4Mi0yLjM3YzEuMDUtMS4wNSAxLjE0LTEuNy4xMy0yLjdsLTIuMzgtMi4zOGMtLjk1LS45NS0xLjYzMi0uOTQtMi43LjEzbC0yLjI2IDIuMjVBMTUgMTUgMCAwIDAgMjQuNSA2LjYyVjMuNWMwLTEuNDgtLjM5MS0yLTEuODItMmgtMy4zNmMtMS4zNSAwLTEuODIuNDktMS44MiAydjMuMTJjLTEuNjIuNC0zLjEzIDEuMDYtNC40OSAxLjkzTDEwLjc1IDYuM0M5LjY4IDUuMjMgOSA1LjIyIDguMDUgNi4xN0w1LjY3IDguNTVjLTEuMDEgMS0uOTIgMS42NS4xMyAyLjdsMi4zNyAyLjM3Yy0uNjggMS4yLTEuMjEgMi41LTEuNTUgMy44OGgtMy4zYy0xLjM1IDAtMS44Mi40OS0xLjgyIDJ2M2MwIDEuNTUuNDcgMiAxLjgyIDJ6bTguNjYtMy41YzAtMy4xNiAyLjU2LTUuNzIgNS43Mi01LjcyczUuNzIxIDIuNTYgNS43MjEgNS43MmE1LjcyIDUuNzIgMCAxIDEtMTEuNDQxIDAiLz48L3N2Zz4="
            iconImage.setAttribute("width", "20px")
            iconImage.setAttribute("height", "20px")

            settingsOpenBT.style.outlineColor = "white";

            settingsOpenBT.classList.add("setting-buttonbase");
            settingsOpenBT.style.inset = "auto 180px 30px auto"

            document.body.append(settingsOpenBT);
            settingsOpenBT.append(iconImage);

            const newSettingsCont = document.createElement("div");
            newSettingsCont.id = "settings_CONTAINER";
            newSettingsCont.classList.add("newsettings")

            newSettingsCont.innerHTML = `
            <span class="ns-row" id="settings_OPT1">
                <img src="
                data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0yMC42NjQgMy40NzhMOCA4djdsLjc0OC4yNjdsLTEuMTI3IDIuMjU0YTIgMiAwIDAgMCAxLjE1NiAyLjc5Mmw0LjA4NCAxLjM2MWEyLjAxNSAyLjAxNSAwIDAgMCAyLjQyMS0xLjAwM2wxLjMwMy0yLjYwNmw0LjA3OSAxLjQ1N0ExIDEgMCAwIDAgMjIgMTguNTgxVjQuNDE5YTEgMSAwIDAgMC0xLjMzNi0uOTQxbS03LjE3MSAxNi4yOTlMOS40MSAxOC40MTZsMS4yMzUtMi40NzFsNC4wNDIgMS40NDR6TTQgMTVoMlY4SDRjLTEuMTAzIDAtMiAuODk3LTIgMnYzYzAgMS4xMDMuODk3IDIgMiAyIi8+PC9zdmc+
                "
                width="20px" height="20px">
                Ping NEW Trips
            </span>

            <span class="ns-row" id="settings_OPT2">
                <img src="
                data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xNyAxOUg3VjVoMTBtMC00SDdjLTEuMTEgMC0yIC44OS0yIDJ2MThhMiAyIDAgMCAwIDIgMmgxMGEyIDIgMCAwIDAgMi0yVjNhMiAyIDAgMCAwLTItMiIvPjwvc3ZnPg==
                "
                width="20px" height="20px">
                Check for App Trips
            </span>

            <span class="ns-row" id="settings_OPT3">
                <img src="
                data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIgMTJDMiA2LjQ3NyA2LjQ3NyAyIDEyIDJzMTAgNC40NzcgMTAgMTBzLTQuNDc3IDEwLTEwIDEwUzIgMTcuNTIzIDIgMTJtMTEtNWExIDEgMCAxIDAtMiAwdjMuNzY0YTMgMyAwIDAgMCAxLjY1OCAyLjY4M2wyLjg5NSAxLjQ0N2ExIDEgMCAxIDAgLjg5NC0xLjc4OGwtMi44OTQtMS40NDhhMSAxIDAgMCAxLS41NTMtLjg5NHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==
                "
                width="20px" height="20px">
                Time Alerts for App Trips
            </span>

            <span class="ns-row" id="settings_OPT4">
                <img src="
                data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0yMCAxOVY3SDR2MTJ6bTAtMTZhMiAyIDAgMCAxIDIgMnYxNGEyIDIgMCAwIDEtMiAySDRhMiAyIDAgMCAxLTItMlY1YTIgMiAwIDAgMSAyLTJ6bS03IDE0di0yaDV2MnptLTMuNDItNEw1LjU3IDlIOC40bDMuMyAzLjNjLjM5LjM5LjM5IDEuMDMgMCAxLjQyTDguNDIgMTdINS41OXoiLz48L3N2Zz4=
                "
                width="20px" height="20px">
                Show Console Logs
            </span>

            <span class="ns-row" id="settings_OPT5">
                <img src="
                data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0ibTEyLjU5MyAyMy4yNThsLS4wMTEuMDAybC0uMDcxLjAzNWwtLjAyLjAwNGwtLjAxNC0uMDA0bC0uMDcxLS4wMzVxLS4wMTYtLjAwNS0uMDI0LjAwNWwtLjAwNC4wMWwtLjAxNy40MjhsLjAwNS4wMmwuMDEuMDEzbC4xMDQuMDc0bC4wMTUuMDA0bC4wMTItLjAwNGwuMTA0LS4wNzRsLjAxMi0uMDE2bC4wMDQtLjAxN2wtLjAxNy0uNDI3cS0uMDA0LS4wMTYtLjAxNy0uMDE4bS4yNjUtLjExM2wtLjAxMy4wMDJsLS4xODUuMDkzbC0uMDEuMDFsLS4wMDMuMDExbC4wMTguNDNsLjAwNS4wMTJsLjAwOC4wMDdsLjIwMS4wOTNxLjAxOS4wMDUuMDI5LS4wMDhsLjAwNC0uMDE0bC0uMDM0LS42MTRxLS4wMDUtLjAxOC0uMDItLjAyMm0tLjcxNS4wMDJhLjAyLjAyIDAgMCAwLS4wMjcuMDA2bC0uMDA2LjAxNGwtLjAzNC42MTRxLjAwMS4wMTguMDE3LjAyNGwuMDE1LS4wMDJsLjIwMS0uMDkzbC4wMS0uMDA4bC4wMDQtLjAxMWwuMDE3LS40M2wtLjAwMy0uMDEybC0uMDEtLjAxeiIvPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik01IDNhMiAyIDAgMCAwLTIgMnY0YTIgMiAwIDAgMCAyIDJoMTRhMiAyIDAgMCAwIDItMlY1YTIgMiAwIDAgMC0yLTJ6bTAgMTBhMiAyIDAgMCAwLTIgMnY0YTIgMiAwIDAgMCAyIDJoMTRhMiAyIDAgMCAwIDItMnYtNGEyIDIgMCAwIDAtMi0yeiIvPjwvZz48L3N2Zz4=
                "
                width="20px" height="20px">
                Toggle Auto-100 Trips
            </span>

            <span class="ns-row" id="settings_OPT6">
                <img src="
                data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik03LjI4OCAxMy43MTNRNyAxMy40MjUgNyAxM3QuMjg4LS43MTJUOCAxMnQuNzEzLjI4OFQ5IDEzdC0uMjg4LjcxM1Q4IDE0dC0uNzEyLS4yODhtNCAwUTExIDEzLjQyNiAxMSAxM3QuMjg4LS43MTJUMTIgMTJ0LjcxMy4yODhUMTMgMTN0LS4yODguNzEzVDEyIDE0dC0uNzEyLS4yODhtNCAwUTE1IDEzLjQyNiAxNSAxM3QuMjg4LS43MTJUMTYgMTJ0LjcxMy4yODhUMTcgMTN0LS4yODguNzEzVDE2IDE0dC0uNzEyLS4yODhNNSAyMnEtLjgyNSAwLTEuNDEyLS41ODdUMyAyMFY2cTAtLjgyNS41ODgtMS40MTJUNSA0aDFWMmgydjJoOFYyaDJ2MmgxcS44MjUgMCAxLjQxMy41ODhUMjEgNnYxNHEwIC44MjUtLjU4NyAxLjQxM1QxOSAyMnptMC0yaDE0VjEwSDV6Ii8+PC9zdmc+
                "
                width="20px" height="20px">
                Hide Other-Day Trips
            </span>

            <span class="ns-row" id="settings_OPT7">
                <img src="
                data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJtNSAxMWwxLjUtNC41aDExTDE5IDExbS0xLjUgNWExLjUgMS41IDAgMCAxLTEuNS0xLjVhMS41IDEuNSAwIDAgMSAxLjUtMS41YTEuNSAxLjUgMCAwIDEgMS41IDEuNWExLjUgMS41IDAgMCAxLTEuNSAxLjVtLTExIDBBMS41IDEuNSAwIDAgMSA1IDE0LjVBMS41IDEuNSAwIDAgMSA2LjUgMTNBMS41IDEuNSAwIDAgMSA4IDE0LjVBMS41IDEuNSAwIDAgMSA2LjUgMTZNMTguOTIgNmMtLjItLjU4LS43Ni0xLTEuNDItMUgxNVYzSDl2Mkg2LjVjLS42NiAwLTEuMjIuNDItMS40MiAxTDMgMTJ2OGExIDEgMCAwIDAgMSAxaDFhMSAxIDAgMCAwIDEtMXYtMWgxMnYxYTEgMSAwIDAgMCAxIDFoMWExIDEgMCAwIDAgMS0xdi04eiIvPjwvc3ZnPg==
                "
                width="20px" height="20px">
                Show Select Driver on Left side
            </span>

            <span class="ns-row" id="settings_OPT8">
                <img src="
                data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMCA0SDRhMSAxIDAgMCAwLTEgMXYxNGExIDEgMCAwIDAgMSAxaDE2YTEgMSAwIDAgMCAxLTFWNWExIDEgMCAwIDAtMS0xTTQgMmEzIDMgMCAwIDAtMyAzdjE0YTMgMyAwIDAgMCAzIDNoMTZhMyAzIDAgMCAwIDMtM1Y1YTMgMyAwIDAgMC0zLTN6bTIgNWgydjJINnptNSAwYTEgMSAwIDEgMCAwIDJoNmExIDEgMCAxIDAgMC0yem0tMyA0SDZ2Mmgyem0yIDFhMSAxIDAgMCAxIDEtMWg2YTEgMSAwIDEgMSAwIDJoLTZhMSAxIDAgMCAxLTEtMW0tMiAzSDZ2Mmgyem0yIDFhMSAxIDAgMCAxIDEtMWg2YTEgMSAwIDEgMSAwIDJoLTZhMSAxIDAgMCAxLTEtMSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+
                "
                width="20px" height="20px">
                WhatsApp Chat Tags
            </span>

            <span class="ns-row" id="settings_OPT9">
                <img src="
                data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTkgM0g1YTIgMiAwIDAgMC0yIDJ2MTRhMiAyIDAgMCAwIDIgMmgxNGEyIDIgMCAwIDAgMi0yVjVhMiAyIDAgMCAwLTItMm0wIDE2SDVWNWgxNHpNOSAxN0g3di01aDJ6bTQgMGgtMlY3aDJ6bTQgMGgtMnYtN2gyeiIvPjwvc3ZnPg==
                "
                width="20px" height="20px">
                Active Booking Stats
            </span>

            <div class="ns-lookupfield">
                <input id="settings_LOOKUP1" placeholder="Term 1..." autocomplete="off">
                <input id="settings_LOOKUP2" placeholder="Term 2..." autocomplete="off">
            </div>
            `;

            document.body.append(newSettingsCont)
            newSettingsCont.style.display = "none"

            // toggle isSettingsVisible
            settingsOpenBT.addEventListener("click", () => {
                if (isSettingsVisible) {
                    newSettingsCont.style.display = "none"
                    isSettingsVisible = false;
                } else {
                    newSettingsCont.style.display = "flex"
                    isSettingsVisible = true;
                }
            })

            document.getElementById("settings_LOOKUP1").addEventListener("change", () => {
                lookupCooldown = true;
            });


            var setting_OPT9 = document.getElementById("settings_OPT9");
            setting_OPT9.style.borderColor = Settings.ShowActiveBookingStats == true ? "green" : "red";

            setting_OPT9.addEventListener("click", () => {
                if (Settings.ShowActiveBookingStats) {
                    Settings.ShowActiveBookingStats = false;
                    setting_OPT9.style.borderColor = "red";

                    document.getElementById("statsNEW").remove();
                    document.getElementById("statsACCEPTED").remove();
                    document.getElementById("statsARRIVED").remove();
                    document.getElementById("statsSTARTED").remove();
                    document.getElementById("statsNEAREND").remove();
                } else {
                    Settings.ShowActiveBookingStats = true;
                    setting_OPT9.style.borderColor = "green";
                }
            })

            var setting_OPT8 = document.getElementById("settings_OPT8");
            setting_OPT8.style.borderColor = Settings.WhatsappTagsSystem == true ? "green" : "red";

            setting_OPT8.addEventListener("click", () => {
                if (Settings.WhatsappTagsSystem) {
                    Settings.WhatsappTagsSystem = false;
                    setting_OPT8.style.borderColor = "red";
                } else {
                    Settings.WhatsappTagsSystem = true;
                    setting_OPT8.style.borderColor = "green";
                }
            })

            var setting_OPT7 = document.getElementById("settings_OPT7");
            setting_OPT7.style.borderColor = Settings.ShowAssignDriverBeforehand == true ? "green" : "red";

            setting_OPT7.addEventListener("click", () => {
                if (Settings.ShowAssignDriverBeforehand) {
                    Settings.ShowAssignDriverBeforehand = false;
                    setting_OPT7.style.borderColor = "red";
                } else {
                    Settings.ShowAssignDriverBeforehand = true;
                    setting_OPT7.style.borderColor = "green";
                }
            })

            var setting_OPT1 = document.getElementById("settings_OPT1");
            setting_OPT1.style.borderColor = Settings.SoundPlayWhenNew == true ? "green" : "red";

            setting_OPT1.addEventListener("click", () => {
                if (Settings.SoundPlayWhenNew) {
                    Settings.SoundPlayWhenNew = false;
                    setting_OPT1.style.borderColor = "red";
                } else {
                    Settings.SoundPlayWhenNew = true;
                    setting_OPT1.style.borderColor = "green";
                }
            })

            var setting_OPT2 = document.getElementById("settings_OPT2");
            setting_OPT2.style.borderColor = Settings.CheckForAppTripsDefault == true ? "green" : "red";

            setting_OPT2.addEventListener("click", () => {
                if (Settings.CheckForAppTripsDefault) {
                    Settings.CheckForAppTripsDefault = false;
                    nameTrips.pop();

                    setting_OPT2.style.borderColor = "red";
                } else {
                    Settings.CheckForAppTripsDefault = true;
                    nameTrips.push("App Passenger");

                    setting_OPT2.style.borderColor = "green";
                }
            })

            var setting_OPT3 = document.getElementById("settings_OPT3");
            setting_OPT3.style.borderColor = Settings.TimeAlertsForAppTrips == true ? "green" : "red";

            setting_OPT3.addEventListener("click", () => {
                if (Settings.TimeAlertsForAppTrips) {
                    Settings.TimeAlertsForAppTrips = false;
                    setting_OPT3.style.borderColor = "red";
                } else {
                    Settings.TimeAlertsForAppTrips = true;
                    setting_OPT3.style.borderColor = "green";
                }
            })

            var setting_OPT4 = document.getElementById("settings_OPT4");
            setting_OPT4.style.borderColor = Settings.ShowConsoleLogs == true ? "green" : "red";

            setting_OPT4.addEventListener("click", () => {
                if (Settings.ShowConsoleLogs) {
                    console.log("!! SETTINGS: DISABLING CONSOLE LOGS !!");
                    console.log = function () { };

                    Settings.ShowConsoleLogs = false;
                    setting_OPT4.style.borderColor = "red";
                } else {
                    console.log = originalConsoleLog;
                    console.log("!! SETTINGS: RE-ENABLING CONSOLE LOGS !!")

                    Settings.ShowConsoleLogs = true;
                    setting_OPT4.style.borderColor = "green";
                }
            })

            var setting_OPT5 = document.getElementById("settings_OPT5");
            setting_OPT5.style.borderColor = Settings.Always100Trips == true ? "green" : "red";

            setting_OPT5.addEventListener("click", () => {
                if (Settings.Always100Trips) {
                    Settings.Always100Trips = false;
                    setting_OPT5.style.borderColor = "red";
                } else {
                    Settings.Always100Trips = true;
                    setting_OPT5.style.borderColor = "green";
                }
            })

            var setting_OPT6 = document.getElementById("settings_OPT6");
            setting_OPT6.style.borderColor = Settings.HighlightTodaysTrips == true ? "green" : "red";

            setting_OPT6.addEventListener("click", () => {
                if (Settings.HighlightTodaysTrips) {
                    Settings.HighlightTodaysTrips = false;
                    setting_OPT6.style.borderColor = "red";
                } else {
                    Settings.HighlightTodaysTrips = true;
                    setting_OPT6.style.borderColor = "green";
                }
            })
        } else {
            if (Settings.ButtonSoundPlayWhenNew) {
                const buttonID = "playNewBT";
                //toggle variable is playNew

                const newCheckButton = document.createElement('button');
                newCheckButton.id = buttonID;
                newCheckButton.innerText = "Ping NEW Trips";
                newCheckButton.style.outlineColor = Settings.SoundPlayWhenNew == true ? "green" : "red";

                newCheckButton.classList.add("setting-buttonbase");
                newCheckButton.classList.add("setting-newchecker");

                newCheckButton.addEventListener("click", () => {
                    if (Settings.SoundPlayWhenNew) {
                        Settings.SoundPlayWhenNew = false;
                        newCheckButton.style.outlineColor = "red";
                    } else {
                        Settings.SoundPlayWhenNew = true;
                        newCheckButton.style.outlineColor = "green";
                    }
                })

                document.body.append(newCheckButton);
            }

            if (Settings.AppTripsToggleButton) {
                const buttonID = "appTripsBT";
                //toggle variable is checkForAppTrips

                const appTripsButton = document.createElement('button');
                appTripsButton.id = buttonID;
                appTripsButton.innerText = "Check for App Trips";
                appTripsButton.style.outlineColor = Settings.CheckForAppTripsDefault == true ? "green" : "red";

                appTripsButton.classList.add("setting-buttonbase");
                appTripsButton.classList.add("setting-checkapptrips");

                appTripsButton.addEventListener("click", () => {
                    if (Settings.CheckForAppTripsDefault) {
                        Settings.CheckForAppTripsDefault = false;
                        nameTrips.pop();

                        appTripsButton.style.outlineColor = "red";
                    } else {
                        Settings.CheckForAppTripsDefault = true;
                        nameTrips.push("App Passenger");

                        appTripsButton.style.outlineColor = "green";
                    }
                })

                document.body.append(appTripsButton);
            }
        }


        if (Settings.NotificationWhenArrived) {
            if (Notification.permission !== "granted") {
                const buttonID = "allowNotifsBT"

                const allowNotifsButton = document.createElement('button');
                allowNotifsButton.id = buttonID;
                allowNotifsButton.innerText = "Allow Notifs";
                allowNotifsButton.style.outlineColor = "yellow";

                allowNotifsButton.classList.add("setting-buttonbase");
                allowNotifsButton.style.inset = "auto 580px 30px auto"

                allowNotifsButton.addEventListener("click", () => {
                    let promise = Notification.requestPermission();

                    allowNotifsButton.remove();
                })

                document.body.append(allowNotifsButton);
            }
        }
    }

    // READ ALL BUTTON //
    (function () {
        'use strict';

        //this is written by gemini ai
        const TARGET_URL = "https://nubeli-cash.firebaseapp.com/chat";
        const CONTAINER_SELECTOR = '.p-scrollpanel-content';
        const BUTTON_ID = 'custom-read-all-btn';

        // The logic to add the button
        function addReadAllButton() {
            // 1. First Check: Are we on the right URL?
            if (window.location.href !== TARGET_URL) return;

            // 2. Second Check: Is the container visible yet?
            const scrollContainer = document.querySelector(CONTAINER_SELECTOR);
            if (!scrollContainer) return;

            // 3. Third Check: Does our button already exist? (Prevent duplicates)
            if (document.getElementById(BUTTON_ID)) return;

            // --- If we passed all checks, create the button ---
            const readAllBtn = document.createElement('button');
            readAllBtn.id = BUTTON_ID;
            readAllBtn.innerText = "Marcar todo como leido";

            // Styles
            readAllBtn.className = "p-3 border-round surface-border border-1 cursor-pointer font-bold mb-3";
            readAllBtn.style.backgroundColor = "#00763F";
            readAllBtn.style.color = "#fff";
            readAllBtn.style.width = "100%";
            readAllBtn.style.borderWidth = "2px";
            readAllBtn.style.borderColor = "#fff";
            readAllBtn.style.borderStyle = "solid";
            readAllBtn.style.borderRadius = "0px";
            readAllBtn.style.fontSize = "1rem";
            readAllBtn.style.textAlign = "center";

            // Click Event
            readAllBtn.addEventListener('click', () => {
                const chatBtnSelector = '.flex.flex-nowrap.justify-content-between.align-items-center.border-1.surface-border.border-round.p-3.cursor-pointer.select-none.hover\\:surface-hover.transition-colors.transition-duration-150';
                const chatButtons = scrollContainer.querySelectorAll(chatBtnSelector);

                console.log(`[ReadAll] Clicking ${chatButtons.length} buttons...`);
                chatButtons.forEach(btn => btn.click());
            });

            // Insert Button
            scrollContainer.prepend(readAllBtn);
            console.log("[ReadAll] Button injected successfully.");
        }

        // --- The Observer Logic ---
        // This watches the entire body for changes (navigation, content loading, etc.)
        const observer = new MutationObserver((mutations) => {
            // Every time the DOM changes, we try to run our logic.
            // It's safe because the function has checks to stop it from running if not needed.
            addReadAllButton();
        });

        // Start watching the document body
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Run once immediately in case the page is already loaded
        addReadAllButton();

    })();

    //RIGHT CLICK COPY FUNCTION
    if (Settings.CopyPhoneNumRightClick) {
        document.addEventListener('contextmenu', function (event) {
            const anchor = event.target.closest('a[href^="tel:"]');

            if (anchor) {
                event.preventDefault();
                var phoneNumber = anchor.getAttribute('href').replace('tel:', '');
                phoneNumber = phoneNumber.replace('+', '')

                highlightText(anchor);

                navigator.clipboard.writeText(phoneNumber).then(() => {
                    console.log('copied to clipboard: ' + phoneNumber);
                }).catch(err => {
                    console.error('Failed to copy: ', err);
                });
            }
        }, false);
    }

    function highlightText(element) {
        element.classList.add('cust_phonecopy');

        setTimeout(() => {
            element.classList.remove('cust_phonecopy');
        }, 300);
    }

    function formatPhoneNum(number, plus) {
        var formatted = number.replace('tel:', '');
        if (plus) {
            formatted = formatted.replace('+', '');
        }

        return formatted;
    }

    function notifyMe(icon, title, text) {
        let promise = Notification.requestPermission();

        if (!("Notification" in window)) {
            alert("This browser does not support desktop notification");
        } else if (Notification.permission === "granted") {

            const notification = new Notification(title, {
                body: text,
                icon: icon
            });

        }
    }

    function minuteDiff(time1, time2) {
        const toSeconds = (t) => {
            const [time, modifier] = t.trim().split(' ');
            let [hours, minutes, seconds = 0] = time.split(':').map(Number);
            if (modifier === 'PM' && hours !== 12) hours += 12;
            if (modifier === 'AM' && hours === 12) hours = 0;
            return hours * 3600 + minutes * 60 + seconds;
        };

        let diffSeconds = toSeconds(time2) - toSeconds(time1);

        // handle midnight rollover so a 11:55PM -> 12:05AM diff isn't ~23h50m
        if (diffSeconds > 12 * 3600) diffSeconds -= 24 * 3600;
        if (diffSeconds < -12 * 3600) diffSeconds += 24 * 3600;

        return Math.floor(diffSeconds / 60); // no Math.abs — keeps the sign
    }

    function OLDminuteDiff(time1, time2) {
        const toSeconds = (t) => {
            const [time, modifier] = t.trim().split(' ');
            let [hours, minutes, seconds = 0] = time.split(':').map(Number);
            if (modifier === 'PM' && hours !== 12) hours += 12;
            if (modifier === 'AM' && hours === 12) hours = 0;
            return hours * 3600 + minutes * 60 + seconds;
        };

        return Math.floor(Math.abs(toSeconds(time2) - toSeconds(time1)) / 60);
    }

    function getNYTime() {
        return new Date().toLocaleTimeString('en-US', {
            timeZone: 'America/New_York',
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
    }
})();

/*
4.1
[bugfixes]
- fixed bug where the arrived/started sound would play if entering and exiting a whatsapp chat with arrived status


4.0
[bugfixes]
- fixed elapsed times in trips from showing NaN
- fixed bug where lookup doesnt update properly in between ticks if typing fast (added cooldown)
- fixed on whatsapp colours which colours got stuck on a chat and didnt remove (until dom update) if trip already closed 
- app trips and hide other day trips now UPDATE PROPERLY if you disable them 
- trips on book later tab dont ping anymore
- ping sounds now dont trigger if changing tabs or trip data dissapears

[features]
- added new colors for whatsapp chats: new, reached/paid
- added lookup function
- highlighted whatsapp chats now can ping sounds as if it was your trip (NEW, ARRIVED, ACCEPTED)
- trips that have a phone number that match a chat you have open, now ping as if it was your trip
- book laters now show an icon to indicate they're a booking

[rewrites]
- refactored whatsapp tags system
- refactored whatsapp coloring, more optimized




3.5
- separated by profiles
- selected driver now appears on leftmost Booking Status column
- refactored selected driver logic, now shows when trip is NEW/RESERVED or ACCEPTED
- added timestamp on Booking Status column that tracks time since trip was booked (if its future time it will show NEGATIVE time)
- double trips now show driver name on the left


3.4
- optimized open whatsapp trip highlight check


3.3
- selected driver's name now shows up under passenger name when trip is NEW
- added the Whatsapp Tags System, you can now tag chats with a specific category for ordering


3.2
- tripChecker now checks every trip (rewrite)
- hide other-day trips now works for every trip
- timestamps now show on every trip
- assigned driver now merges with selected driver for accesibility
- whatsapp chats now highlight to the state of the trip



3.1
- can now toggle if app trips are included in time alerts
- notification when arrived settings now works
- added new settings menu
- new setting options
- optimized some code and variable-settings to work properly
- added option to hide trips that aren't for today (only works for selected/highlighted trips)



3.0
- highlight loop now only checks when page is dashboard
- refactored highlight system
- added accepted time and arrived time passed to highlighted trips
- added warning and highlight for trips higher than 10 mins in accepted
- added warning and highlight for trips higher than 7 mins in arrived
- cleaned up lots of code


2.0
- cleaned up and refactored settings
- feature: desktop notification for arrived trips when unfocused
- feature: automatically set dashboard trips to 100
- internal: added notification function

1.35
- special ping new trip sound for app trips

1.34
- changed started trip sound

1.33
-feature: whatsapp highlight trip corresponding to open chat
-tweak: small performance optimizations and tweaks

1.22
-feature: ringing for NEW trips
-feature: alt behaviour for App Passenger trips
-feature: button to toggle NEW trips ping function
-feature: button for toggling checking for app passengers

-known bug: cant remove class when untoggling checkforapptrips, it has to refresh

1.21
-feature: play a sound when a trip starts

-fix: fixed error loop when rows have no trip status tag
-fix: rows in incidents reports with your name not highlighting
*/