var ArcadeHub = {
    popupQueue: [],
    isDisplaying: false,
    currentVersion: "1.0.0",
    updates: [
        "Completely revamped UI",
        "Added a ton of new games",
        "Made a new Google Form where you can post suggestions and feedback just for v4",
        "Made v4 easily available through an easier link [arcadehubgaming.github.io](https://arcadehubgaming.github.io)",
    ],

    createPopup: function(title, content) {
        this.popupQueue.push({ type: "simple", title, content });
        this.processQueue();
    },

    createUpdatePopup: function(title, itemsArray) {
        this.popupQueue.push({ type: "update", title, itemsArray });
        this.processQueue();
    },

    processQueue: function() {
        if (this.isDisplaying || this.popupQueue.length === 0) {
            return;
        }

        this.isDisplaying = true;

        const popupData = this.popupQueue.shift();
        const popupContainer = document.createElement("div");
        popupContainer.className = "popup-container";

        const popup = document.createElement("div");
        popup.className = "popup";

        const popupTitle = document.createElement("div");
        popupTitle.className = "popup-title";
        popupTitle.textContent = popupData.title;

        const popupContentContainer = document.createElement("div");
        popupContentContainer.className = "popup-content-container";

        if (popupData.type === "simple") {
            const contentParagraph = document.createElement("p");
            contentParagraph.innerHTML = this.convertMarkdownLinks(popupData.content.replace(/\n/g, '<br>'));
            popupContentContainer.appendChild(contentParagraph);
        }

        if (popupData.type === "update") {
            const itemList = document.createElement("ul");
            popupData.itemsArray.forEach(item => {
                const listItem = document.createElement("li");
                listItem.innerHTML = this.convertMarkdownLinks(item.replace(/\n/g, '<br>'));;
                itemList.appendChild(listItem);
            });
            popupContentContainer.appendChild(itemList);
        }

        const closeButton = document.createElement("p");
        closeButton.className = "popup-close-btn";
        closeButton.textContent = "Close";

        popupContentContainer.appendChild(closeButton);
        popup.appendChild(popupTitle);
        popup.appendChild(popupContentContainer);
        popupContainer.appendChild(popup);

        document.body.appendChild(popupContainer);

        closeButton.addEventListener("click", () => {
            popupContainer.remove();
            this.isDisplaying = false;
            this.processQueue();
            this.setCookie("hasVisited", "true", 32767);
            this.setCookie("lastVersion", this.currentVersion, 32767);
        });
    },

    convertMarkdownLinks: function(content) {
        return content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
    },

    setCookie: function(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },

    getCookie: function(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
};

document.addEventListener("DOMContentLoaded", function() {
    const lastVersion = ArcadeHub.getCookie("lastVersion");
    ArcadeHub.setCookie("lastVersion", ArcadeHub.currentVersion, 32767);

    if (!ArcadeHub.getCookie("hasVisited")) {
        ArcadeHub.createPopup("Welcome to Arcade Hub!", `
            Welcome to Arcade Hub, here we host tons of games, movies, proxies, and other cool content that we hope you'd enjoy!\n
            If you see any issues or want to give any feedback, make a suggestion on our [Google Form](https://forms.gle/bQTVfmNK4pKtxk9W9) or on our [Github](https://github.com/arcadehubgaming/v4).\n
        `);
    }

    if (lastVersion && String(lastVersion) !== String(ArcadeHub.currentVersion)) {
        ArcadeHub.createUpdatePopup("Update Changelog", ArcadeHub.updates);
    }
});
