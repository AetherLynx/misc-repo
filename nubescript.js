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

(function() {
    'use strict';

    //  SCRIPT V1.35
    //  SETTINGS -- SETTINGS -- SETTINGS -- SETTINGS
    //  SETTINGS -- SETTINGS -- SETTINGS -- SETTINGS



    const consoleLogs = false; // show console logs (disable for performance)

    //  enable copying numbers with right click
    const phoneCopy = true;

    // name(s) for highlighting trips / rows
    // syntax to add a name example: ["Samuel Martinez", "Santiago Martinez"]
    var nameTrips = ["Samuel Martinez", "Otro usuario"];

    var checkForAppTrips = false; // check for app passengers
    const appTripsToggle = true; // ^^^ add button to toggle it

    // play a sound when a trip of yours toggles to "ARRIVED"
    const playArrived = true;

    // play a sound when your arrived trips toggle to "STARTED"
    const playStarted = true;

    // play a sound when a trip is "NEW"
    var playNew = false;
    const playNewIncludeBt = true; // add a button to toggle this in the dom

    // sound to play when arrived - volume (0 - 1.0)
    // placeholder sound: https://actions.google.com/sounds/v1/alarms/beep_short.ogg
    const arrivedSound = new Audio("https://github.com/AetherLynx/misc-repo/raw/refs/heads/main/0210%20-%20Menu%20Selection.mp3");
    arrivedSound.volume = 0.4;

    // sound to play when arrived trip starts - volume (0 - 1.0)
    const startedSound = new Audio("https://github.com/AetherLynx/misc-repo/raw/refs/heads/main/0213%20-%20Unknown%20Menu%20Sound.mp3");
    startedSound.volume = 0.4;

    // sound to play when trips is new - volume (0 - 1.0)
    // this alarm plays constantly
    const newtripSound = new Audio("https://github.com/AetherLynx/misc-repo/raw/refs/heads/main/0215%20-%20More%20Menu%20Stuff.mp3");
    newtripSound.volume = 0.1;

    // sound to play when trips is new FOR APP PASSENGER TRIPS - volume (0 - 1.0)
    // this alarm plays constantly
    const newAppTripSound = new Audio("https://github.com/AetherLynx/misc-repo/raw/refs/heads/main/0896%20-%20Surprise%20Box%20&%20Ten-Yeti%20-%20Miss.mp3");
    newAppTripSound.volume = 0.1;

    // when having an open Whatsapp Chat, highlight a trip with the chat's number (if it exists)
    const showOpenWspTrip = true;

    // enable book later notification system
    const bookingSystem = false;

    // show button to fetch bookings
    const bookingSysButton = false;


    //  SETTINGS -- SETTINGS -- SETTINGS -- SETTINGS
    //  SETTINGS -- SETTINGS -- SETTINGS -- SETTINGS


    // DATA
    const rootStyles = window.getComputedStyle(document.documentElement);
    const arrivedText = "span.p-tag-value";
    var arrivedTrips = 0; //arrived trips counter
    var firstChecker = 0; //first checker
    var csscolour = null;
    const wspContQuery = ".flex.bg-white.align-items-center.justify-content-between.w-full.shadow-2.z-1";

    if (bookingSystem) {
        var bookingInfoCont = null;
        var bookingInfoText = null;
        var fetcherBT = null
    }

    /* Example of how a entry in booking array looks like:
        {
            time: "5:40:00 AM",
            username: "Vicky",
            number: "16314153364",
            pickup: "43 Voorhis Dr, Brentwood, Nueva York, EE. UU.",
            by: "Samuel Martinez"
        }
    */
    var bookingArray = [];


    if (!consoleLogs) {
        console.log("-- disabling console logs --");
        const originalConsoleLog = console.log;
        console.log = function() {};
    }

    createSettingButtons();
    highlightRowBySpan();
    setInterval(highlightRowBySpan, 1000);

    if (showOpenWspTrip) {
        highlightWhatsapp();
        setInterval(highlightWhatsapp, 200)
    }


    function bookingSystemFunc(task) {
        if (task == "fetch") {
            bookingInfoText.textContent = "Fetching bookings...";
            fetcherBT.innerText = "Fetching..."

            const newBookings = document.querySelectorAll('tr[role="row"]:has(.p-tag.p-component.p-tag-warning)');

            fetcherBT.innerText = "Fetched " + newBookings.length;

            if (newBookings.length > 0) {

                const testing = newBookings[0].querySelectorAll("span");
                const testing2 = newBookings[0].querySelectorAll("td")
                bookingInfoText.textContent = testing;
                console.log(testing2);
                console.log("THE CONTENT IS "+testing2[2].textContent)

                newBookings.forEach(element => {
                })
            }
        }
    }

    function highlightWhatsapp() {
        const wspCont = document.querySelector(wspContQuery);

        if (wspCont) {
            var wspNumber = wspCont.querySelector(`a[href^="tel:"]`);
            wspNumber = formatPhoneNum(wspNumber.getAttribute('href'), true);

            document.querySelectorAll(`a[href^="tel:"]`).forEach(tripTel => {
                const curTripValue = formatPhoneNum(tripTel.getAttribute('href'), true);

                if (curTripValue == wspNumber) {
                    const row = tripTel.closest('tr[role="row"]');

                    if (row) {
                        if (!(row.classList.contains("whatsapp-highlight"))) {
                            row.classList.add("whatsapp-highlight");
                        }
                    }
                }
            })
        } else {
            removeAllWspHl();
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


    // HIGHLIGHT ROWS //
    function highlightRowBySpan() {
        firstChecker = 0;
        document.querySelectorAll('span').forEach(span => {
            if (nameTrips.includes(span.textContent) || span.textContent.includes(nameTrips[0])) {
                const userString = span.textContent;
                const row = span.closest('tr[role="row"]');
                if (row) {
                    if (userString !== "App Passenger") {
                        csscolour = rootStyles.getPropertyValue('--owntrips-colour').trim();
                        row.classList.add("owntrip");
                    } else {
                        csscolour = rootStyles.getPropertyValue('--alt-owntrips-colour').trim();
                        row.classList.add("alt-owntrip");
                    }


                    row.style.setProperty('background-color', csscolour, 'important');
                    const tripTag = row.querySelector(arrivedText);

                    if (tripTag) {
                        if (tripTag.textContent == "ARRIVED" && userString !== "App Passenger") {
                            firstChecker++;
                            //console.log("Trip is: "+ tripTag.textContent +", Firstchecker: "+ firstChecker);
                        } else if (tripTag.textContent == "NEW") {

                            if (playNew && userString !== "App Passenger") {
                                newtripSound.play();
                                console.log("found new own");
                            }

                            if (playNew && userString == "App Passenger") {
                                newAppTripSound.play();
                                console.log("found new app");
                            }
                        }
                    }
                }
            }
        });

        // higher difference means there's a new arrived trip
        // lower difference means an arrived trip changed/got canceled
        // equal values means no difference, trips are the same

        if (firstChecker > arrivedTrips && playArrived) {
            arrivedSound.play();
        }

        if (firstChecker < arrivedTrips && playStarted) {
            startedSound.play();
        }

        if (firstChecker !== arrivedTrips) {
            arrivedTrips = firstChecker;
            firstChecker = 0;
        }
    }

    // NEW CHECKER BUTTON //
    function createSettingButtons() {
        if (playNewIncludeBt) {
        const buttonID = "playNewBT";
        //toggle variable is playNew

        const newCheckButton = document.createElement('button');
        newCheckButton.id = buttonID;
        newCheckButton.innerText = "Ping NEW Trips";
        newCheckButton.style.outlineColor = playNew == true ? "green" : "red";

        newCheckButton.classList.add("setting-buttonbase");
        newCheckButton.classList.add("setting-newchecker");

        newCheckButton.addEventListener("click", ()=> {
            if (playNew) {
                playNew = false;
                newCheckButton.style.outlineColor = "red";
            } else {
                playNew = true;
                newCheckButton.style.outlineColor = "green";
            }
        })

        document.body.append(newCheckButton);
        }

        if (appTripsToggle) {
        const buttonID = "appTripsBT";
        //toggle variable is checkForAppTrips

        const appTripsButton = document.createElement('button');
        appTripsButton.id = buttonID;
        appTripsButton.innerText = "Check for App Trips";
        appTripsButton.style.outlineColor = checkForAppTrips == true ? "green" : "red";

        appTripsButton.classList.add("setting-buttonbase");
        appTripsButton.classList.add("setting-checkapptrips");

        appTripsButton.addEventListener("click", ()=> {
            if (checkForAppTrips) {
                checkForAppTrips = false;
                nameTrips.pop();

                appTripsButton.style.outlineColor = "red";
            } else {
                checkForAppTrips = true;
                nameTrips.push("App Passenger");

                appTripsButton.style.outlineColor = "green";
            }
        })

        document.body.append(appTripsButton);
        }

        if (bookingSysButton) {
        const buttonID = "fetchBookingsBT";

        fetcherBT = document.createElement('button');
        fetcherBT.id = buttonID;
        fetcherBT.innerText = "Fetch Bookings";
        fetcherBT.style.outlineColor = "yellow";

        fetcherBT.classList.add("setting-buttonbase");
        fetcherBT.classList.add("setting-fetchbookings");

        fetcherBT.addEventListener("click", ()=> {
            bookingSystemFunc("fetch");
        })

        document.body.append(fetcherBT);

        // booking info
        const containerID = "bookingInfoDIV";
        const contTextID = "bookingInfoTXT";

        bookingInfoCont = document.createElement('div');
        bookingInfoCont.id = containerID;
        bookingInfoCont.classList.add("setting-buttonbase");
        bookingInfoCont.classList.add("container-bookinginfo");

        bookingInfoText = document.createElement('span');
        bookingInfoText.id = contTextID;
        bookingInfoText.textContent = "Placeholder text - Placeholder Text - Placeholder Text"

        document.body.append(bookingInfoCont);
        bookingInfoCont.appendChild(bookingInfoText);
        }
    }

    // READ ALL BUTTON //
    (function() {
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
    if (phoneCopy == true) {
        document.addEventListener('contextmenu', function(event) {
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
})();

/*
1.4 tba
-working on booking sys

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