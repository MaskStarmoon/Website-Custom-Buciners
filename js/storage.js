/*
=========================================
Katabumb Creator
storage.js
=========================================
*/

const STORAGE_KEY = "katabumb_creator_v1";

/*
=========================================
DEFAULT STATE
=========================================
*/

const defaultState = {

    project: {
        name: "Project Baru",
        template: "birthday",
        createdAt: Date.now()
    },

    theme: {
        primary: "#5B7CFA",
        secondary: "#EDF2FF",
        background: "#FFFFFF",
        text: "#222222"
    },

    hero: {
        image: "",
        sticker: "",
        title: "Happy Birthday ❤️",
        subtitle: "Semoga hari ini menjadi hari terbaikmu."
    },

    gallery: [],

    memories: [],

    messages: [],

    music: {
        type: "link",
        url: "",
        autoplay: true,
        loop: true,
        volume: 100
    },

    gift: {
        title: "",
        type: "pdf",
        url: ""
    },

    buttons: [],

    animation: {
        heart: true,
        confetti: false,
        bubble: false,
        sakura: false,
        firework: false,
        snow: false
    },

    seo: {
        title: "",
        description: "",
        keywords: "",
        favicon: "",
        ogImage: ""
    }

};

/*
=========================================
GLOBAL STATE
=========================================
*/

let state = structuredClone(defaultState);

/*
=========================================
HELPER
=========================================
*/

function clone(data){

    return JSON.parse(JSON.stringify(data));

}

/*
=========================================
SAVE
=========================================
*/

function saveStorage(){

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(state)

    );

    if(window.setSaveStatus){

        setSaveStatus("✔ Draft tersimpan");

    }

}

/*
=========================================
LOAD
=========================================
*/

function loadStorage(){

    const raw = localStorage.getItem(STORAGE_KEY);

    if(!raw){

        state = clone(defaultState);

        return;

    }

    try{

        const data = JSON.parse(raw);

        state = {

            ...clone(defaultState),

            ...data

        };

    }

    catch(err){

        console.error(err);

        state = clone(defaultState);

    }

}

/*
=========================================
RESET
=========================================
*/

function resetStorage(){

    state = clone(defaultState);

    saveStorage();

}

/*
=========================================
EXPORT
=========================================
*/

function exportProject(){

    const blob = new Blob(

        [

            JSON.stringify(state,null,2)

        ],

        {

            type:"application/json"

        }

    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download =

        (state.project.name || "project")

        + ".json";

    a.click();

    URL.revokeObjectURL(url);

}

/*
=========================================
IMPORT
=========================================
*/

function importProject(file){

    const reader = new FileReader();

    reader.onload = e=>{

        try{

            state = JSON.parse(e.target.result);

            saveStorage();

            if(window.renderAll){

                renderAll();

            }

        }

        catch{

            alert("File project tidak valid.");

        }

    };

    reader.readAsText(file);

}

/*
=========================================
AUTO SAVE
=========================================
*/

let autoSaveTimer = null;

function scheduleSave(){

    clearTimeout(autoSaveTimer);

    autoSaveTimer = setTimeout(()=>{

        saveStorage();

    },300);

}

/*
=========================================
GET STATE
=========================================
*/

function getState(){

    return state;

}

/*
=========================================
SET STATE
=========================================
*/

function setState(path,value){

    const keys = path.split(".");

    let obj = state;

    while(keys.length > 1){

        obj = obj[keys.shift()];

    }

    obj[keys[0]] = value;

    scheduleSave();

}

/*
=========================================
INIT
=========================================
*/

loadStorage();

window.state = state;

window.getState = getState;

window.setState = setState;

window.saveStorage = saveStorage;

window.loadStorage = loadStorage;

window.resetStorage = resetStorage;

window.exportProject = exportProject;

window.importProject = importProject;

window.scheduleSave = scheduleSave;
