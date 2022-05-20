import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonImg, IonThumbnail, IonGrid, IonCol, IonRow } from '@ionic/react';
import { diamondSharp, gameController, gameControllerSharp, logoDiscord, logoWhatsapp } from 'ionicons/icons';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cards</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
     
        <IonGrid>
        <IonRow>
        <IonCol size='6'>
        <IonCard color='dark'>
          
          <IonCardHeader>
            <IonImg src={gameControllerSharp} />
            <IonCardSubtitle>Videojuegos</IonCardSubtitle>
            <IonCardTitle>Mandos inalambricos</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Los mandos son una gran ayuda para poder jugar con la mayor comodidad posible.
      </IonCardContent>
        </IonCard>
        </IonCol>

        <IonCol size='6'>
        <IonCard color='warning'>
          <IonCardHeader>
            <IonImg src={diamondSharp} />
            <IonCardSubtitle>Joyas</IonCardSubtitle>
            <IonCardTitle>Diamante</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Es un mineral de muy alto precio, actualmente
      </IonCardContent>
        </IonCard>

        </IonCol>
        <IonCol size='6'>
        <IonCard color='primary'>
          <IonCardHeader>
            <IonImg src={logoDiscord} />
            <IonCardSubtitle>Comunicación</IonCardSubtitle>
            <IonCardTitle>Discord</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Es una aplicacion de comunicacion mejor usada por las personas a la hora de jugar Videojuegos para comunicarse con sus coompañeros.
      </IonCardContent>
        </IonCard>
        </IonCol>
        <IonCol size='6'>
        <IonCard color='success'>
          <IonCardHeader>
            <IonImg src={logoWhatsapp} />
            <IonCardSubtitle>Apps</IonCardSubtitle>
            <IonCardTitle>WhatsApp</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Es una aplicacion movil que te espia y tienen un rival mas grande que es, pero como nadie lo uso tenemos que seguir con esta.
      </IonCardContent>
        </IonCard>
        </IonCol>
        </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
