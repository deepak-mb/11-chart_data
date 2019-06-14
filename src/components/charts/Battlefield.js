import React, { Component } from "react";
import { getBattlefieldData } from "../../actions/chartActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Chart from "chart.js";

class Battlefield extends Component {
  state = {
    chartData: ""
  };
  populateGraph = battlefielddata => {
    const battlefieldDataArray = Object.values(battlefielddata);
    let labels = battlefieldDataArray.map(e => {
      return e.label;
    });
    let count = battlefieldDataArray.map(e => {
      return e.count;
    });
    let peak24 = battlefieldDataArray.map(e => {
      return e.peak24;
    });
    var ctx = document.getElementById("myChart").getContext("2d");
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: "bar",

      // The data for our dataset
      data: {
        labels: labels,
        datasets: [
          {
            label:
              "No of online players playing Battlefield 4 all around the world.",
            backgroundColor: [
              "darkgray",
              "aquamarine",
              "brown",
              "burlywood",
              "tomato"
            ],
            borderColor: "transparent",
            data: count
          }
        ]
      },

      // Configuration options go here
      options: {}
    });
  };
  componentDidMount() {
    this.props.getBattlefieldData();
  }
  componentWillReceiveProps(nextProps) {
    this.populateGraph(nextProps.battlefielddata);
  }
  render() {
    return (
      <div>
        <canvas id="myChart" />
        <div />
      </div>
    );
  }
}

Battlefield.propTypes = {
  //   battlefielddata: PropTypes.array.isRequired,
  getBattlefieldData: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  battlefielddata: state.chart.battlefielddata
});

export default connect(
  mapStateToProps,
  { getBattlefieldData }
)(Battlefield);
