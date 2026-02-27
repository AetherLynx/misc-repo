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

    //  SCRIPT V2.0

    var Settings = {

        ShowConsoleLogs: false,             // show console logs
        CopyPhoneNumRightClick: true,       // copy phone numbers to clipboard by right clicking them
        CheckForAppTripsDefault: false,     // default option for highlighting app trips
        AppTripsToggleButton: true,         // display the 'Check For App Trips' button

        HighlightTripsFrom: [               // whose trips to highlight in the dashboard
            "Samuel Martinez",
            "Nombre ejemplo",
            "Nombre ejemplo",
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

        NotificationWhenArrived: true,      // send desktop notification when a trip's arrived and window is unfocused
        Always100Trips: true,               // always render 100 trips (uses dropdown button)

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

    // DATA
    const rootStyles = window.getComputedStyle(document.documentElement);
    const arrivedText = "span.p-tag-value";
    var arrivedTrips = 0; //arrived trips counter
    var firstChecker = 0; //first checker
    var csscolour = null;
    const wspContQuery = ".flex.bg-white.align-items-center.justify-content-between.w-full.shadow-2.z-1";
    const warningIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Im0xMi41OTMgMjMuMjU4bC0uMDExLjAwMmwtLjA3MS4wMzVsLS4wMi4wMDRsLS4wMTQtLjAwNGwtLjA3MS0uMDM1cS0uMDE2LS4wMDUtLjAyNC4wMDVsLS4wMDQuMDFsLS4wMTcuNDI4bC4wMDUuMDJsLjAxLjAxM2wuMTA0LjA3NGwuMDE1LjAwNGwuMDEyLS4wMDRsLjEwNC0uMDc0bC4wMTItLjAxNmwuMDA0LS4wMTdsLS4wMTctLjQyN3EtLjAwNC0uMDE2LS4wMTctLjAxOG0uMjY1LS4xMTNsLS4wMTMuMDAybC0uMTg1LjA5M2wtLjAxLjAxbC0uMDAzLjAxMWwuMDE4LjQzbC4wMDUuMDEybC4wMDguMDA3bC4yMDEuMDkzcS4wMTkuMDA1LjAyOS0uMDA4bC4wMDQtLjAxNGwtLjAzNC0uNjE0cS0uMDA1LS4wMTgtLjAyLS4wMjJtLS43MTUuMDAyYS4wMi4wMiAwIDAgMC0uMDI3LjAwNmwtLjAwNi4wMTRsLS4wMzQuNjE0cS4wMDEuMDE4LjAxNy4wMjRsLjAxNS0uMDAybC4yMDEtLjA5M2wuMDEtLjAwOGwuMDA0LS4wMTFsLjAxNy0uNDNsLS4wMDMtLjAxMmwtLjAxLS4wMXoiLz48cGF0aCBmaWxsPSIjNjVhMzBkIiBkPSJNMTIgMmM1LjUyMyAwIDEwIDQuNDc3IDEwIDEwcy00LjQ3NyAxMC0xMCAxMFMyIDE3LjUyMyAyIDEyUzYuNDc3IDIgMTIgMm0wIDEzYTEgMSAwIDEgMCAwIDJhMSAxIDAgMCAwIDAtMm0wLTlhMSAxIDAgMCAwLS45OTMuODgzTDExIDd2NmExIDEgMCAwIDAgMS45OTMuMTE3TDEzIDEzVjdhMSAxIDAgMCAwLTEtMSIvPjwvZz48L3N2Zz4="
    var tabFocused = false;

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
        const originalConsoleLog = console.log;
        console.log = function () { };
    }

    if (Settings.HighlightWhatsappTrip) {
        highlightWhatsapp();
        setInterval(highlightWhatsapp, 200)
    }

    createSettingButtons();
    highlightRowBySpan();
    setInterval(highlightRowBySpan, 1000);

    if (Settings.Always100Trips) {
        const TRIPS_URL = "https://nubeli-cash.firebaseapp.com/dashboard-beta";
        setInterval(() => {

            if (window.location.href !== TRIPS_URL) return;

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

                            if (Settings.SoundPlayWhenNew && userString !== "App Passenger") {
                                newtripSound.play();
                                console.log("found new own");
                            }

                            if (Settings.SoundPlayWhenNew && userString == "App Passenger") {
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

        if (firstChecker > arrivedTrips && Settings.SoundPlayWhenArrived) {
            arrivedSound.play();

            if (!tabFocused) {
                notifyMe(warningIcon, "NubeLi", "Nuevo viaje en arrived (" + firstChecker + " viajes)");
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

    // NEW CHECKER BUTTON //
    function createSettingButtons() {
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
})();

/*
2.0
- cleaned up and refactored settings
- desktop notification for arrived trips when unfocused

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