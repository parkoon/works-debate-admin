import React from "react";
import { Card, Divider, Row, Col, Icon, Tooltip } from "antd";
import Chart from "chart.js";
import PropTypes from "prop-types";

class LineGraph extends React.Component {
  componentDidMount() {
    var ctx = document.getElementById("myChart");

    // Chart.defaults.LineWithLine = Chart.defaults.line;
    // Chart.controllers.LineWithLine = Chart.controllers.line.extend({
    //   draw: function(ease) {
    //     Chart.controllers.line.prototype.draw.call(this, ease);
    //     if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
    //       var activePoint = this.chart.tooltip._active[0],
    //         ctx = this.chart.ctx,
    //         x = activePoint.tooltipPosition().x,
    //         topY = this.chart.scales["y-axis-0"].top,
    //         bottomY = this.chart.scales["y-axis-0"].bottom;

    //       // draw line
    //       ctx.save();
    //       ctx.beginPath();
    //       ctx.moveTo(x, topY);
    //       ctx.lineTo(x, bottomY);
    //       ctx.lineWidth = 2;
    //       ctx.strokeStyle = "#07C";
    //       ctx.stroke();
    //       ctx.restore();
    //     }
    //   }
    // });
    // https://stackoverflow.com/questions/45159895/moving-vertical-line-when-hovering-over-the-chart-using-chart-js
    new Chart(ctx, {
      type: "line",
      // data: {
      //   labels: this.props.xAxisLabels,
      //   datasets: [
      //     {
      //       label: this.props.dataLabel,
      //       data: this.props.data,
      //       fill: false, // 라인 안쪽을 채울지 여부
      //       borderColor: "tomato", // 라인 색
      //       lineTension: 0.1, // 라인 굴곡
      //       pointBorderColor: "tomato",
      //       pointBackgroundColor: "#fff",
      //       pointHoverRadius: 4,
      //       pointRadius: 4,
      //       pointHoverBackgroundColor: "tomato"
      //     }
      //   ]
      // },
      data: {
        labels: ["A", "B", "C", "D", "E", "F"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
          },
          {
            label: "# of Points",
            data: [7, 11, 5, 8, 3, 7],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: false
        },
        tooltips: {
          intersect: false
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              },
              ticks: {
                fontSize: 10,
                fontColor: "gray"
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                drawBorder: false
                // display: false,
              },
              ticks: {
                beginAtZero: true,
                // fontSize: 15
                fontColor: "#fff",
                maxTicksLimit: 5,
                padding: 25
              }
            }
          ]
        }

        // maintainAspectRatio: false,
      }
    });
  }

  render() {
    return (
      <Card bordered={false} className="wrapper__graph">
        {/* <Card title={this.props.title} bordered={false}> */}
        <div className="graph__box">
          <canvas
            id="myChart"
            className="chartjs"
            style={{ display: "block", width: "100%", height: "198px" }}
          ></canvas>
        </div>

        <Tooltip placement="bottom" title={"통계 새로고침"}>
          <Icon
            type="reload"
            className="graph__reload"
            onClick={this.props.refresh}
          />
        </Tooltip>

        <Divider></Divider>
        <Row className="graph__info">
          <Col span={2} className="info__yesterday">
            <h1 className="info__title">어제 방문수</h1>
            <span className="info__data">
              {this.props.data[this.props.data.length - 2] || 0}
            </span>
          </Col>
          <Col span={2} className="info__today">
            <h1 className="info__title">오늘 방문수</h1>
            <span className="info__data">
              {this.props.data[this.props.data.length - 1] || 0}
            </span>
          </Col>
          {/* <Col span={20} className="info__total">
            <h1 className="info__title">누적 방문수</h1>
            <span className="info__data">(need api)</span>
          </Col> */}
        </Row>
      </Card>
    );
  }
}

LineGraph.propTypes = {
  xAxisLabels: PropTypes.array.isRequired,
  data: PropTypes.array,
  dataLabel: PropTypes.string
};

export default LineGraph;
