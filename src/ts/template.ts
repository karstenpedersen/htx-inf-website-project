// Faa fat i header og footer elementerne.
const headerContainer: HTMLElement = document.getElementById("header") as HTMLElement;
const footerContainer: HTMLElement = document.getElementById('footer') as HTMLElement;

const pathName = window.location.pathname;  // Lokation stignavn.

// Variabel som indeholder information om hvilke menuer skal indsættes.
const navItemData = [
    {
        title: 'Guides',
        type: '1',
        path: '/src/html/guides.html',
        iconName: '',
        subItems: null,
    },
    {
        title: 'More',
        type: '1',
        path: '#',
        iconName: 'arrow_drop_down',
        subItems: [
            {
                title: 'About Us',
                type: '2',
                path: '/src/html/aboutus.html',
                iconName: '',
                subItems: null,
            },
            {
                title: 'FAQ',
                type: '2',
                path: '/src/html/faq.html',
                iconName: '',
                subItems: null,
            }
        ]
    }
];

/**
 * Opret header indhold.
 */
function createHeader() {
    var headerString = '';

    headerString += "<div id='header-container'>";
    if (onIndex()) {
        // <img src="./assets/icons/facebook_logo.svg" alt="">
        headerString +=     "<a class='logo-container logo-normal' href='./index.html'>";
        headerString +=         "<img src='./assets/img/web-learn-logo.svg' alt='logo'>";
    } else {
        headerString +=     "<a class='logo-container logo-normal' href='../../index.html'>";
        headerString +=         "<img src='../../assets/img/web-learn-logo.svg' alt='logo'>";
    }
    headerString +=         "<div class='text'><h4 class='company-name'>WEB BRAIN</h4></div>";
    headerString +=     "</a>";
    headerString +=     "<div class='header-menu'>";
    headerString +=         "<nav>";
    // Menus
    headerString +=             "<ul class='nav-menus'>";
    headerString +=                 createNavItems(navItemData);
    headerString +=             "</ul>";
    headerString +=         "</nav>";
    // Profile
    headerString +=         "<div class='profile-container'>";
    if (onIndex())
        headerString +=             "<a class='login' href='./src/html/login.html'><button class='button-primary'>Sign In</button></a>";
    else
        headerString +=             "<a class='login' href='../../src/html/login.html'><button class='button-primary'>Sign In</button></a>";
    headerString +=         "</div>";
    headerString +=     "</div>";
    headerString +=     "<div class='burger'>";
    headerString +=         "<div class='line1'></div>";
    headerString +=         "<div class='line2'></div>";
    headerString +=         "<div class='line3'></div>";
    headerString +=     "</div>";
    headerString += "</div>";

    headerContainer.innerHTML += headerString;
}

function footer() {

}

/**
 * Laver en string som indeholder menu items.
 * @param {*} items 
 * @returns item string
 */
function createNavItems(items) {
    var itemString = "";
    for (let i = 0; i < items.length; i++) {
        // Faa nuvaerende item
        var item = items[i];

        if (item.type === "1") { // Top element
            itemString += "<li class='menu'>";
            // Lav elementet
            if (onIndex())
                itemString += "<a class='title' href='." + item.path + "'>";
            else
                itemString += "<a class='title' href='../.." + item.path + "'>";
            itemString += "<p class='menu-name'>" + item.title + "</p>";
            if (item.iconName != "")
                itemString += "<i class='material-icons'>" + item.iconName + "</i>";
            itemString += "</a>";
            // Opret sub items hvis der er nogle (drop-down-menu)
            if (item.subItems != null) {
                itemString += "<ul>";
                itemString += createNavItems(item.subItems);
                itemString += "</ul>";
            }
            itemString += "</li>";
        } else { // Sub element (drop-down-menu)
            if (onIndex())
                itemString += "<li><a href='." + item.path + "'>" + item.title + "</a></li>";
            else
                itemString += "<li><a href='../.." + item.path + "'>" + item.title + "</a></li>";
        }
    }

    return itemString;
}

/**
 * Tjek om brugeren er på index.html eller ej.
 */
function onIndex() {
    console.log("PATH NAME: " + pathName);
    if (pathName.length === 0 || pathName === "/" || pathName.match(/^\/?index/) || pathName.includes('index')) {
        console.log("INDEX");
        return true;
    }
    
    return false;
}

// Koer metoder
createHeader();