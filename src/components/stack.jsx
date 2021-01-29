import React from "react";
import Helmet from "react-helmet";
import jsImg from "./../assets/images/stack/javascript.jpeg";
import cssImg from "./../assets/images/stack/css.png";
import htmlImg from "./../assets/images/stack/html.png";
import nodejsImg from "./../assets/images/stack/nodejs.png";
import reactjsImg from "./../assets/images/stack/reactjs.png";
import sassImg from "./../assets/images/stack/sass.png";
import hbsImg from "./../assets/images/stack/hbs.png";
import es6Img from "./../assets/images/stack/es6.jpg";
import amazonec2Img from "./../assets/images/stack/amazon-ec2.png";
import amazons3Img from "./../assets/images/stack/amazon-s3.png";
import awsLambdaImg from "./../assets/images/stack/aws-lambda.png";
import centosImg from "./../assets/images/stack/centos.jpg";
import expressImg from "./../assets/images/stack/express.png";
import tsImg from "./../assets/images/stack/ts.jpg";
import mongodbImg from "./../assets/images/stack/mongodb.png";
import herokuImg from "./../assets/images/stack/heroku.png";
import trelloImg from "./../assets/images/stack/trello.jpg";
import slackImg from "./../assets/images/stack/slack.jpg";
import gitImg from "./../assets/images/stack/git.png";
import webpackImg from "./../assets/images/stack/webpack.png";
import StackItem from "./common/stackItem";

const Stack = () => (
  <>
    <section className="section  is-size-4-desktop is-size-5-touch">
      <Helmet
        script={[
          {
            async: true,
            src: "https://cdn1.stackshare.io/javascripts/client-code.js",
            charSet: "utf-8",
          },
        ]}
      />
      <h1 className="title has-text-centered has-text-light">Stack</h1>
      <div className="container has-text-centered">
        <hr />
        <p className="content">
          I have experience with many modern tools, I select them for my
          projects depending on the usage.
        </p>
        <div className="columns stack-section">
          <div className="column stackshare">
            <StackItem title="JavaScript" imgLink={jsImg} />
            <StackItem title="React.js" imgLink={reactjsImg} />
            <StackItem title="Node.js" imgLink={nodejsImg} />
            <StackItem title="TypeScript" imgLink={tsImg} />
            <StackItem title="MongoDB" imgLink={mongodbImg} />
            <StackItem title="HTML5" imgLink={htmlImg} />
            <StackItem title="CSS3" imgLink={cssImg} />
            <StackItem title="Heroku" imgLink={herokuImg} />
            <StackItem title="HandleBars" imgLink={hbsImg} />
            <StackItem title="SCSS" imgLink={sassImg} />
            <StackItem title="Express.js" imgLink={expressImg} />
            <StackItem title="ES6" imgLink={es6Img} />
            <StackItem title="Centos" imgLink={centosImg} />
            <StackItem title="AWS Lambda" imgLink={awsLambdaImg} />
            <StackItem title="Amazon S3" imgLink={amazons3Img} />
            <StackItem title="Amazon EC2" imgLink={amazonec2Img} />
            <StackItem title="Trello" imgLink={trelloImg} />
            <StackItem title="Slack" imgLink={slackImg} />
            <StackItem title="Git" imgLink={gitImg} />
            <StackItem title="Webpack" imgLink={webpackImg} />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Stack;

/* 

<>
    <section className="section is-size-4-desktop is-size-5-touch">
      <Helmet
        script={[
          {
            async: true,
            src: "https://cdn1.stackshare.io/javascripts/client-code.js",
            charSet: "utf-8",
          },
        ]}
      />
      <h1 className="title has-text-centered has-text-light">Stack</h1>
      <div className="container has-text-centered">
        <hr />
        <p className="content">
          I have experience with many modern tools, I select them for my
          projects depending on the usage.
        </p>
        <p className="content">Here is my stack on StackShare:</p>
        <div className="columns">
          <div className="column stackshare">
            {/* <a
              frameborder="0"
              data-theme="dark"
              data-layers="1,2,4,3"
              data-stack-embed="true"
              href="https://embed.stackshare.io/stacks/embed/d1f14b870d83350281fffabf0d9f06"
            ></a> }
            <a
              // frameBorder="1100"
              data-theme="dark"
              data-layers="1"
              data-stack-embed="true"
              href="https://embed.stackshare.io/stacks/embed/e729b6381e73b5973e60413e581876"
            >
              StackShare
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
*/
