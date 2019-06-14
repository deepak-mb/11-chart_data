import React, { Component } from "react";
import { getChartData } from "../../actions/chartActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Chart from "chart.js";

class GDPChart extends Component {
  state = {
    gdpdata: ""
  };
  populateGraph = gdpdata => {
    let labels = gdpdata.map(e => {
      return e.date;
    });
    let data = gdpdata.map(e => {
      return e.value;
    });
    labels = labels.reverse();
    data = data.reverse();

    var ctx = document.getElementById("myChart").getContext("2d");
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: "bar",

      // The data for our dataset
      data: {
        labels: labels,
        datasets: [
          {
            label: "India's GDP Growth in US Dollars (1960 - 2018)",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: data
          }
        ]
      },

      // Configuration options go here
      options: {}
    });
  };
  componentDidMount() {
    this.props.getChartData();
  }
  componentWillReceiveProps(nextProps) {
    this.populateGraph(nextProps.gdpdata);
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

GDPChart.propTypes = {
  gdpdata: PropTypes.array.isRequired,
  getChartData: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  gdpdata: state.chart.gdpdata
});

export default connect(
  mapStateToProps,
  { getChartData }
)(GDPChart);
