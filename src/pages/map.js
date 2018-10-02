import React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from "google-maps-react";
import PropTypes from "prop-types";
import Main from "../components/Main";
import Article from "../components/Main/Article";
import PageHeader from "../components/Page/PageHeader"; 
import Content from "../components/Main/Content";

const GoogleMapstyle = {
  margin: "0 0rem 6em",
  width: '80%',
  height: '50%'
}



var directionUrl ="https://www.google.com.au/maps/place/Evangelical+Formosan+Church+of+Maroubra+%E6%9D%B1%E9%9B%AA%E6%A2%A8%E5%8F%B0%E7%A6%8F%E6%95%99%E6%9C%83+(EFCM)/@-33.9437171,151.2371186,17z/data=!3m1!4b1!4m5!3m4!1s0x6b12b3d6b2dfdd3d:0xfa224c162cbf8993!8m2!3d-33.9437171!4d151.2393126";

export class MapContainer extends React.Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    return (
      <Main>
        <Article  >
          <Content>
          <PageHeader title="地址"/> 
            <p>
            我們在 Wise street 和 Anzac Paraide 的交界，我們教會是跟 Hope Uniting Church 共用
            </p>
            <p> 
            (GPS: 829 Anzac Parade, Maroubra)
            </p>
            <h3>開車</h3>
              <p>教會對面有停車的地方，請注意免費停車的時間</p>
              <h3>交通工具</h3>
              <p>From City: 393,394,395,396,397,398,399, m10</p>
              <p>From Eastgarden: 400</p>
              <Map containerStyle={GoogleMapstyle}  google={this.props.google} initialCenter={{
                  lat: -33.943735,
                  lng: 151.239297
                }}
                  zoom={18}
                  onClick={this.onMapClicked} 
              >
                <Marker onClick={this.onMarkerClick} name={"東雪梨台福基督教會"} />
                <InfoWindow
                  marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}>
                    <div>
                      <a href={directionUrl}>{this.state.selectedPlace.name}</a> 
                    </div>
                </InfoWindow>    
              </Map>
            </Content>
        </Article>
      </Main>
    );
  }
}



export default GoogleApiWrapper({
  apiKey: ("AIzaSyD7wSnZMhun27H7w3VHVJLY7UsepTvAUuQ")
})(MapContainer)
