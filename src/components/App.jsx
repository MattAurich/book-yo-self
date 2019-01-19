import React ,{Component}  from 'react';
import Day from './day/Day';


//import { Navigation, Layout, Header, HeaderRow, HeaderTabs, Tab, Drawer, Content} from "react-mdl";


import { Tab as TabRb, Tabs } from 'react-bootstrap';

// Renaming to Demo, to make it easier to switch back and forth
class Demo extends React.Component
{
    //class ControlledTabs extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      key: 1,
      AppTabs:[<Day dbRef={props.dbRef}  id={Math.random()}/>,<Day dbRef={props.dbRef} id={Math.random()}/> ],
      active: 1
    };
    console.log("\n\n\n at the end of the Demo constructor \n\n\n");
  }

  handleSelect(key) {
    //alert(`selected ${key}`);
    this.setState({ key });
  }

  render() {
    console.log("\n\n\n at the Demo Render \n\n\n");    
    return (
      <Tabs
        activeKey={this.state.key}
        onSelect={this.handleSelect}
        id="controlled-tab-example"
      >
        <TabRb eventKey={1} title="Tab 1">
            {this.state.AppTabs[0]} 
        </TabRb>
        <TabRb eventKey={2} title="Tab 2">
            {this.state.AppTabs[1]}
        </TabRb>
        <TabRb eventKey={3} title="Tab 3" disabled>
          Tab 3 content
        </TabRb>
      </Tabs>
    );
  }
}












 //const App = function(props) {

 // return <Day dbRef={props.dbRef}></Day>;
//}

export default  Demo;
