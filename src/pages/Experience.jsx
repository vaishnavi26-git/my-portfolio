import React from "react";
import "../Styles/Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
       
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2006-2008"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Jawahar Navodaya Vidyalaya,Bihar
          </h3>
          <p>High secondary examination</p>
        </VerticalTimelineElement>{" "}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010-2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Chouksey Engineering College,Bilaspur
          </h3>
          <p>Bachelor of Engineering</p>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2006"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Jawahar Navodaya Vidyalaya,Bihar
          </h3>
          <p>Secondary examination</p>
        </VerticalTimelineElement> */}
                <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="July 2021-Dec. 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
Xhitiz IT Solutions          </h3>
          <p>Software Intern</p>
        </VerticalTimelineElement>{" "}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022-Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Tech Jain IT Solutions
          </h3>
          <p>High secondary examination</p>
        </VerticalTimelineElement>{" "}

      </VerticalTimeline>
    </div>
  );
}

export default Experience;
