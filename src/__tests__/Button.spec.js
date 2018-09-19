import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Button from "../components/Button/Button";

Enzyme.configure({ adapter: new Adapter() });

describe("<Button />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
  });

  it("renders inner button text", () => {
    const wrapper = shallow(<Button name="1" orange />);
    expect(wrapper.find("button").text()).toEqual("1");
  });

  it("current classname orange", () => {
    const wrapper = shallow(<Button name="1" orange />);
    expect(wrapper.find("div").hasClass("orange")).toEqual(true);
  });

  it("current classname wide", () => {
    const wrapper = shallow(<Button name="1" wide />);
    expect(wrapper.find("div").hasClass("wide")).toEqual(true);
  });

  it("onClick", () => {
    const nav = jest.fn();
    const wrapper = shallow(<Button name="1" clickHandler={nav} />);
    wrapper.find("button").simulate("click");
    expect(nav).toHaveBeenCalledTimes(1);
  });
});
