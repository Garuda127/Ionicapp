import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonReorder, IonImg, IonLabel, IonItem, IonReorderGroup, IonListHeader, IonGrid, IonRow, IonCol } from '@ionic/react';
import { diamondSharp, logoDiscord, logoFacebook, logoGooglePlaystore, logoPaypal, logoPlaystation, logoSteam, logoTwitch, logoWhatsapp, logoWindows, logoXbox, logoYoutube } from 'ionicons/icons';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista dinamica</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen> </IonContent>
    </IonPage>
  );
};

export default Tab2;
