
# Location-Background-Expo

**App.Json**

    "ios": {
       "bundleIdentifier": "com.grupolizame.testprivategl",
       "buildNumber": "1.0.0",
       "infoPlist": {
         "UIBackgroundModes": [
           "location",
           "fetch"
         ]
       }
     },
     "notification": {
       "icon": "./assets/iconnoti.png",
       "color": "#000000"
     },
     "android": {
       "package": "com.grupolizame.testprivategl",
       "versionCode": 1,
       "permissions": [
         "ACCESS_COARSE_LOCATION",
         "ACCESS_FINE_LOCATION",
         "FOREGROUND_SERVICE"
       ]
     }

     
**Home.js**

    
   

     import React from 'react';
     import { Text, TouchableOpacity } from 'react-native';
     //taskmanager para las tareas
     import * as TaskManager from 'expo-task-manager';
     //Location: para el backgorund location
     import * as Location from 'expo-location';
     //Permisos para la notificacion permanente
     import * as Permissions from 'expo-permissions';
     import API from "../../../utils/api";
     
     const LOCATION_TASK_NAME = 'background-location-task';
     //Ver app.json para los detalles de configuracion y permiusos que son improtantes
     export default class Home extends React.Component {
         onPress = async () => {
             //cuando el usuario active el background location solicitamos permiso para la localización.
             const { status } = await Location.requestPermissionsAsync();
 
 
         if (status === 'granted') {
             //una vez otorgado creamos el update de la location y le asignamos la tarea con la constante antes creada
             await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
                 accuracy: Location.Accuracy.Balanced,
                 timeInterval:30000,//tiempo cada vez que actulize si no lo ponemos actualizara cada vezque el usuario s emueva
                 showsBackgroundLocationIndicator:true,//importante para celulares 8.0 en adelante andorid
                 foregroundService:{//variables de la notificacion
                     notificationTitle:"Zuvap esta obteniendo tu ubicación en tiempo real.",
                     notificationBody:"Estamos recibiendo tu ubicación en tiempo real, para la optimización del contenido..."
                 }
             });
         }
     };
     async componentDidMount() {
         //solicitamos permisos para crear las notificaciones si no la solicitamos nunca aparecera la notificacion que es importante para obtener la location
         const {status2} = await Permissions.getAsync(Permissions.NOTIFICATIONS)
         let finalStatus = status2
         if (status2 !== 'granted'){
             const {status3} = await Permissions.askAsync(Permissions.NOTIFICATIONS)
             finalStatus = status3
         }
     }
 
     render() {
         return (
             <TouchableOpacity onPress={this.onPress}>
                 <Text>Activar el location background</Text>
             </TouchableOpacity>
         );
     }
     }
     //creamois la tarea imporatnte que sea fuera de la clase para que se creee antes de todas las funciones
     TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
         if (error) {
             // Error occurred - check `error.message` detectamos el error
             // console.log(error.message)
             return;
         }
         if (data) {
             const { locations } = data;
             console.log(locations[0])
             //creamos un api para oibtener la ubicacion esto es a cuestion de cada quien puede ser un socket o sencillamente guardarlo en un store o redux
             // fetch('' + API.getEndPoint() + 'locations', {
             //     method: 'POST',
             //     headers: {
             //         Accept: 'application/json',
             //         'Content-Type': 'application/json'
             //     },
             //     body: JSON.stringify({ lat:locations[0].coords.latitude,lng:locations[0].coords.longitude })
             // }).then((response) => response.json()).then((res) => {
             //     // console.log(res)
             //     // console.log(res )
             //
             // })
             // do something with the locations captured in the background
         }
     });
