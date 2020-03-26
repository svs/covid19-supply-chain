import React  from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { list, addCircle, map, informationCircle } from 'ionicons/icons';

import Map from './MapView';
import About from './About';
import LocationList from './LocationList';
import LocationDetail from './LocationDetail';
import Report from './Report';

interface MainTabsProps { }

const MainTabs: React.FC<MainTabsProps> = () => {

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/map" />
        <Route path="/tabs/list" component={LocationList} exact={true} />
        <Route path="/tabs/list/:id" component={LocationDetail} exact={true} />
        <Route path="/tabs/report" component={Report} exact={true} />
        <Route path="/tabs/map" component={Map} exact={true} />
        <Route path="/tabs/about" component={About} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="map" href="/tabs/map">
          <IonIcon icon={map} />
          <IonLabel>Map</IonLabel>
        </IonTabButton>
        <IonTabButton tab="list" href="/tabs/list">
          <IonIcon icon={list} />
          <IonLabel>List</IonLabel>
        </IonTabButton>
        <IonTabButton tab="speakers" href="/tabs/report">
          <IonIcon icon={addCircle} />
          <IonLabel>Report</IonLabel>
        </IonTabButton>
        <IonTabButton tab="about" href="/tabs/about">
          <IonIcon icon={informationCircle} />
          <IonLabel>About</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;