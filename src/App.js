import React, { useState } from "react";
import "./App.css";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { InView } from "react-intersection-observer";

Chart.register(CategoryScale);
Chart.register(ChartDataLabels);

function App() {
  const [dataIndex, setDataIndex] = useState(0);
  const [businessData, setBusinessData] = useState([
    215, 419, 632, 868, 1025, 1236, 1458, 1645, 1951, 2162,
  ]);
  const [farmerData, setFarmerData] = useState([
    259, 588, 911, 1182, 1505, 1934, 2313, 2670, 3091, 3454,
  ]);
  const [governmentData, setGovernmentData] = useState([
    55, 106, 153, 187, 216, 272, 328, 434, 537, 1056,
  ]);
  const [landGrabbersData, setLandGrabbersData] = useState([
    149, 261, 366, 476, 588, 712, 879, 1018, 1201, 1369,
  ]);
  const [loggersData, setLoggersData] = useState([
    38, 77, 111, 142, 194, 273, 328, 391, 449, 499,
  ]);
  const [miningData, setMiningData] = useState([
    39, 75, 98, 135, 185, 265, 320, 368, 417, 458,
  ]);

  const options = {
    elements: {
      point: {
        radius: 1,
      },
    },
    scales: {
      y: {
        max: 3500,
        min: 0,
      },
    },
    plugins: {
      // Change options for ALL labels of THIS CHART
      datalabels: {
        color: "#8e9490",
        anchor: "end",
        align: "end",
        display: function (context) {
          return context.dataIndex === dataIndex;
        },
      },
    },
  };
  const dataSet = (data) => {
    return data.slice(0, dataIndex + 1);
  };
  const data = {
    labels: [
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
    ],
    datasets: [
      {
        data: dataSet(businessData),
        label: "Business",
        borderColor: "RGB(66,133,244)",
        backgroundColor: "RGB(66,133,244, 0.1)",
        fill: true,
        borderWidth: 2,
        lineTension: 0.5,
      },
      {
        data: dataSet(farmerData),
        label: "Farmers",
        borderColor: "RGB(234,67,53)",
        backgroundColor: "RGB(234,67,53, 0.1)",
        fill: true,
        borderWidth: 2,
        lineTension: 0.5,
      },
      {
        data: dataSet(governmentData),
        label: "Government",
        borderColor: "RGB(251,188,4)",
        backgroundColor: "RGB(251,188,4, 0.1)",
        fill: true,
        borderWidth: 2,
        lineTension: 0.5,
      },
      {
        data: dataSet(landGrabbersData),
        label: "Land-grabbers",
        borderColor: "RGB(52,168,83)",
        backgroundColor: "RGB(52,168,83, 0.1)",
        fill: true,
        borderWidth: 2,
        lineTension: 0.5,
      },
      {
        data: dataSet(loggersData),
        label: "Loggers",
        borderColor: "RGB(255,109,1)",
        backgroundColor: "RGB(255,109,1, 0.1)",
        fill: false,
        borderWidth: 2,
        lineTension: 0.5,
      },
      {
        data: dataSet(miningData),
        label: "Mining",
        borderColor: "RGB(70,189,198)",
        backgroundColor: "RGB(70,189,198, 0.1)",
        fill: false,
        borderWidth: 2,
        lineTension: 0.5,
      },
    ],
  };

  return (
    <div className="container">
      <h1 className={"py-5 text-center"}>this is a chart component</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at
        beatae corporis dicta dolor exercitationem harum hic inventore
        laudantium, nam officiis possimus repellendus sequi tempore vero,
        voluptate voluptates? Ab cupiditate deleniti error et fugit, magni
        maxime nesciunt odit officiis optio provident quod, sed ut veritatis
        voluptates. Dolorem harum ipsum laboriosam minus officiis unde
        voluptatem. Accusantium aperiam beatae, dolorum ea enim ipsa laborum
        libero molestiae molestias mollitia natus neque nihil nostrum, officiis
        quas, quia quibusdam quidem quisquam rem vel voluptate voluptates
        voluptatum! A ad aliquam aut cumque dignissimos, distinctio dolorem
        doloremque ducimus eveniet excepturi explicabo iste iusto maxime natus
        neque nesciunt obcaecati optio porro quidem quo quos rem repellat
        sapiente sed temporibus totam ut voluptate. Commodi deleniti dignissimos
        ea eaque, error ex harum, itaque magnam minus odio optio, vitae voluptas
        voluptatem! Assumenda consequuntur dolores fuga itaque labore laudantium
        nam officiis reprehenderit suscipit voluptates. Atque, autem consectetur
        cum dignissimos eligendi est et fugiat id impedit maxime non nulla
        obcaecati porro quaerat recusandae ut vero? Aliquid aspernatur eligendi
        esse expedita hic illum iure magnam natus neque nobis, placeat quidem
        rem repudiandae sequi sit totam, vitae. Alias aperiam autem consequatur
        consequuntur dicta distinctio ducimus, est ex facere impedit laudantium
        non officiis porro quae ratione? Ab beatae error libero praesentium
        soluta? Architecto at commodi cupiditate deserunt dolore doloremque ea
        eaque earum eos esse facere facilis fugit impedit ipsum laudantium,
        minus modi molestias natus nihil nisi non, nostrum numquam perferendis
        perspiciatis porro quidem quisquam repellat sit unde voluptatum. Cumque
        deserunt, eius. Ab accusantium asperiores aspernatur at autem cum,
        debitis distinctio doloremque ducimus eaque earum exercitationem facere
        fugit hic impedit itaque molestias nam neque nostrum officiis
        perferendis perspiciatis praesentium quas quibusdam ratione repellat
        reprehenderit rerum sapiente sint tenetur velit veniam voluptate
        voluptatem? Amet architecto enim, eum modi molestiae quod. Ab atque
        corporis excepturi numquam quas quo vero!
      </p>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at
        beatae corporis dicta dolor exercitationem harum hic inventore
        laudantium, nam officiis possimus repellendus sequi tempore vero,
        voluptate voluptates? Ab cupiditate deleniti error et fugit, magni
        maxime nesciunt odit officiis optio provident quod, sed ut veritatis
        voluptates. Dolorem harum ipsum laboriosam minus officiis unde
        voluptatem. Accusantium aperiam beatae, dolorum ea enim ipsa laborum
        libero molestiae molestias mollitia natus neque nihil nostrum, officiis
        quas, quia quibusdam quidem quisquam rem vel voluptate voluptates
        voluptatum! A ad aliquam aut cumque dignissimos, distinctio dolorem
        doloremque ducimus eveniet excepturi explicabo iste iusto maxime natus
        neque nesciunt obcaecati optio porro quidem quo quos rem repellat
        sapiente sed temporibus totam ut voluptate. Commodi deleniti dignissimos
        ea eaque, error ex harum, itaque magnam minus odio optio, vitae voluptas
        voluptatem! Assumenda consequuntur dolores fuga itaque labore laudantium
        nam officiis reprehenderit suscipit voluptates. Atque, autem consectetur
        cum dignissimos eligendi est et fugiat id impedit maxime non nulla
        obcaecati porro quaerat recusandae ut vero? Aliquid aspernatur eligendi
        esse expedita hic illum iure magnam natus neque nobis, placeat quidem
        rem repudiandae sequi sit totam, vitae. Alias aperiam autem consequatur
        consequuntur dicta distinctio ducimus, est ex facere impedit laudantium
        non officiis porro quae ratione? Ab beatae error libero praesentium
        soluta? Architecto at commodi cupiditate deserunt dolore doloremque ea
        eaque earum eos esse facere facilis fugit impedit ipsum laudantium,
        minus modi molestias natus nihil nisi non, nostrum numquam perferendis
        perspiciatis porro quidem quisquam repellat sit unde voluptatum. Cumque
        deserunt, eius. Ab accusantium asperiores aspernatur at autem cum,
        debitis distinctio doloremque ducimus eaque earum exercitationem facere
        fugit hic impedit itaque molestias nam neque nostrum officiis
        perferendis perspiciatis praesentium quas quibusdam ratione repellat
        reprehenderit rerum sapiente sint tenetur velit veniam voluptate
        voluptatem? Amet architecto enim, eum modi molestiae quod. Ab atque
        corporis excepturi numquam quas quo vero!
      </p>
      <div className="row">
        <div className="col-md-4" id="sample">
          {data.labels.map((label, key) => {
            return (
              <InView
                as="div"
                threshold={0.3}
                className={label}
                key={key}
                onChange={(inView, entry) => {
                  if (inView) {
                    setDataIndex(key);
                  }
                }}
              >
                <h1>PEC 76/2011, Author - Blairo Maggi (PR-MT) </h1>
                <hr />
                <img
                  src="https://www.w3schools.com/w3css/img_lights.jpg"
                  alt=""
                  className={"img-fluid w-100"}
                />
                <div className="row">
                  <div className="col-md-3">
                    <h1>{label}</h1>
                  </div>
                  <div className="col-md-9">
                    <p>
                      Amendment to articles 176 and 231 of the Federal
                      Constitution to give congress the decision making power to
                      explore water resources on indigenous lands. The
                      constitutional amendment bill proposes to offer indigenous
                      peoples “participation in the exploitation of the
                      potential of hydraulic energy” on their lands, as well as
                      “in the mining of mineral resources”.
                    </p>
                    <p>
                      In the early morning of 18 November 2011, some 40 gunmen
                      arrived at a Guarani-Kaiowá indigenous encampment in Mato
                      Grosso do Sul State, and shot tribal leader Nísio Gomes
                      before dragging him away. Gomes’ body and three indigenous
                      children abducted during the attack have not been seen
                      since. A private security company, Gaspem Segurança, was
                      implicated in the death of Gomes and another indigenous
                      leader, Dorvalino Rocha. The same organization was found
                      to have been responsible for burning indigenous houses,
                      and kidnapping and beating indigenous people from 2009 to
                      2011.
                    </p>
                  </div>
                </div>
              </InView>
            );
          })}
        </div>

        <div className="col-md-8">
          <div className="chart">
            <Line typpe="line" options={options} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
