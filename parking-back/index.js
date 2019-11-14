const express = require('express');
const cors = require('cors');
const fs = require('fs')
const mongoose = require('mongoose')
const path = require('path');
const fatch = require('node-fetch');
const staticAsset = require('static-asset');
const MongoClient = require('mongodb').MongoClient;
const moment = require('moment');

const PORT = process.env.PORT || 9011;
const url = require('./config/db').url;
const uri = require('./config/db').uri;
const db = require('./config/db').database;
const app = express();

app.set('view engine', 'ejs');
app.use(staticAsset(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(cors());


/**
 * !Fatch camera data 10.88.8.3
*/

    setInterval( () => {
        fatch(url)
        .then(response => response.json())
        .then(data => {
            const state = { caunt: 0 };
            //console.log("DATA", data)
            console.log("DATA_START_LOWER", data[data.length -1].time);
            
            data.map(i => {
                 if ( i.channel_id === 'a5e8b047-da30-462f-bbae-0c46d5ee452d' && i.origin === 'Vehicle' ) {
                    //console.log("CAMER_BOTTOM", i)
                    if(i.rule_name === "Enter") { i.rule_name = 1 };
                    if(i.rule_name === "Exit") { i.rule_name = -1 };
                    state.caunt = state.caunt + i.rule_name;
                    if ( state.caunt < 0 ) {
                        //console.log("ORIGIN", state.caunt)
                        state.caunt = 0;
                        //console.log( "RESPONSE ", state.caunt)
                    } else {
                        const time = moment().format('LTS');
                        //console.log("STATE_REAL_TIME_LOWER",  state.caunt , time);
                        fs.writeFile('./database/db.txt',  `${state.caunt}` , (error, data ) => {})
                        fs.readFile('./database/db.txt', 'utf8', (error, data) => {
                            //console.log("DATA => ", data)
                        });
                    }
                }  
            });

    })
    .catch(error => console.log('ERROR', error));
    }, 20000)

/**
 * !Fetch 2 f8703df9-e714-4dd2-b790-e3dac22bd95f
 */

setInterval( () => {
    fatch(uri)
    .then(response => response.json())
    .then(data => {
        const state = { caunt: 0 };
        //console.log("DATA", data)
        console.log("DATA_START_UPPER", data[data.length -1].time);
        
        data.map(i => {
             if ( i.channel_id === 'f8703df9-e714-4dd2-b790-e3dac22bd95f') {
               //console.log("i.rule_name_1", i )

                if(i.rule_name === "Enter") {
                    //console.log("Enter**********", i.rule_name)
                     i.rule_name = 1
                     };
                if(i.rule_name === "Exit") {
                    //console.log("Enter**********", i.rule_name)
                     i.rule_name = -1 
                    };
                state.caunt = state.caunt + Number(i.rule_name);

                //console.log("i.rule_name_2", i.rule_name)
                //console.log( "STATE", state.caunt )
                const time = moment().format('LTS');

                if ( state.caunt > 0 ) {
                   
                    //console.log("STATE_REAL_TIME_UPPER",  state.caunt , time);
                    fs.writeFile('./database/upper.txt',  `${state.caunt}` , (error, data ) => {})
                    fs.readFile('./database/upper.txt', 'utf8', (error, data) => {
                        //console.log("DATA => ", data)
                    })
                } else {
                       //console.log("ORIGIN", state.caunt)
                       state.caunt = 0;
                       //console.log( "RESPONSE ", state.caunt, time)
                }
            }  
        });

})
.catch(error => console.log('ERROR', error));
}, 20000)






/**
 * ! Send response
 */

app.get('/', (req,res) => {
    res.render('index', {
        bottom: 12,
         top: 98,
         title: 'Parking'
    });
});

app.get('/lower', (req, res) => {
    fs.readFile('./database/db.txt',  'utf8', (error, data) => {
        if (!error) {
            return res.json({ status: 'Success_Lower', data });
        }
    });
})

app.get('/upper', (req, res) => {
    fs.readFile('./database/upper.txt',  'utf8', (error, data) => {
        if (!error) {
            return res.json({ status: 'Success_Upper', data });
        }
    });
})

app.listen(PORT, () => console.info(`Server is run in ${PORT}`));