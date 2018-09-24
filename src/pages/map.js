import React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from "google-maps-react";
import Main from "../components/Main";
import Article from "../components/Main/Article";
import PageHeader from "../components/Page/PageHeader"; 
import Content from "../components/Main/Content";

const style = {
  width: '90%',
  height: '90%',
}
 
export class MapContainer extends React.Component {
  render() {
    return (
      <Main>
        <Article>
        <PageHeader title="地址" />
          <Content>
          <p>
          我們在 Wise street 和 Anzac Paraide 的交界，我們教會是跟 Hope Uniting Church 共用
          </p>
          <p>
          (GPS: 829 Anzac Parade, Maroubra)
          </p>
            <h3>開車</h3>
            <p>教會對面有停車地方，請注意免費停車的時間</p>
            <h3>公共交通</h3>
            <p>From City: 393,394,395,396,397,398,399, m10</p>
            <p>From Eastgarden: 400</p>
            </Content>
          <Map google={this.props.google} style={style}  initialCenter={{
                lat: -33.943735,
                lng: 151.239297
              }} 
                zoom={18}
                onClick={this.onMapClicked}
            >
              <Marker onClick={this.onMarkerClick} name={"Evangelical Formosan Church of Maroubra 東雪梨台福教會 (EFCM)"} />    
              <InfoWindow onClose={this.onInfoWindowClose}>
                  <div>
                    <h1>Sydney</h1>
                  </div>
              </InfoWindow>
            </Map>
        </Article>
      </Main>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyD7wSnZMhun27H7w3VHVJLY7UsepTvAUuQ")
})(MapContainer)
