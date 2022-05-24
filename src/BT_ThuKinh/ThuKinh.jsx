import React, { Component } from "react";

export default class ThuKinh extends Component {
  state = {
    glasses: [
      {
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "./glassesImage/v1.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 2,
        price: 50,
        name: "GUCCI G8759H",
        url: "./glassesImage/v2.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 3,
        price: 30,
        name: "DIOR D6700HQ",
        url: "./glassesImage/v3.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 4,
        price: 70,
        name: "DIOR D6005U",
        url: "./glassesImage/v4.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 5,
        price: 40,
        name: "PRADA P8750",
        url: "./glassesImage/v5.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 6,
        price: 60,
        name: "PRADA P9700",
        url: "./glassesImage/v6.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 7,
        price: 80,
        name: "FENDI F8750",
        url: "./glassesImage/v7.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 8,
        price: 100,
        name: "FENDI F8500",
        url: "./glassesImage/v8.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 9,
        price: 60,
        name: "FENDI F4300",
        url: "./glassesImage/v9.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
    ],
    glassesDisplay: null,
  };

  showGlasses = (item) => {
    this.setState({ glassesDisplay: item });
  };

  render() {
    return (
      <div>
        <div
          style={{
            zIndex: "3",
            color: "white",
            backgroundColor: "rgba(1, 1, 1, 0.5)",

            position: "absolute",
            textAlign: "center",
            width: "100%",
          }}
        >
          <h1 style={{ position: "relative", zIndex: "6", opacity: 1 }}>
            TRY GLASSES APP ONLINE
          </h1>
        </div>
        <div
          style={{
            backgroundImage: `url(/glassesImage/background.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          height="100vh"
        >
          <div
            style={{
              backgroundColor: "rgba(1, 1, 1, 0.2)",
              width: "100%",
              textAlign: "center",
            }}
            height="100vh"
          >
            <div className="row" style={{ padding: "115px 0 115px 0" }}>
              <div className="col-sm-6">
                <img
                  src="/glassesImage/model.jpg"
                  alt="model"
                  width="40%"
                  style={{ position: "relative" }}
                />
                <img
                  src={
                    this.state.glassesDisplay
                      ? this.state.glassesDisplay.url
                      : this.state.glasses[0].url
                  }
                  alt="g1"
                  width="10%"
                  style={{ position: "absolute", left: "294px", top: "205px" }}
                />

                <div
                  className="info"
                  style={{
                    position: "absolute",
                    left: "220px",
                    bottom: "338px",
                    backgroundColor: "rgba(253,189,143,0.5)",
                    textAlign: "left",
                    width: "295px",
                  }}
                >
                  <div className="name">
                    <h1 style={{ fontSize: "18px", color: "#9278d3" }}>
                      {this.state.glassesDisplay
                        ? this.state.glassesDisplay.name
                        : this.state.glasses[0].name}
                    </h1>
                  </div>
                  <div className="description">
                    <p style={{ fontSize: "14px", color: "white" }}>
                      {this.state.glassesDisplay
                        ? this.state.glassesDisplay.desc
                        : this.state.glasses[0].desc}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <img src="/glassesImage/model.jpg" alt="model" width="40%" />
              </div>
            </div>

            <div className="container">
              <div
                className="row"
                style={{
                  marginTop: "50px",
                  backgroundColor: "white",
                  padding: "50px 0 20px 0",
                  margin: "0 50px 0 50px",
                }}
              >
                {this.state.glasses.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="col-sm-2"
                      style={{ margin: "15px 0", padding: "0" }}
                      onClick={() => this.showGlasses(item)}
                    >
                      <img
                        src={item.url}
                        alt="g1"
                        width="70%"
                        style={{ border: "solid 1px black", padding: "10px" }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
