import React, {Component} from 'react';
import EventList from "./components/EventList";
import EventForm from "./components/EventForm";
import GameSelector from "./components/GameSelector";

const routes = ({
            eventList: {
                screen: EventList,
                navigationOptions: () => ({
                    title: 'Events'
                })
            },
            createEvent: {
                screen: EventForm,
                navigationOptions: () => ({
                    title: 'Create event'
                })
            },
            editEvent: {
                screen: EventForm,
                navigationOptions: () => ({
                    title: 'Edit event'
                })
            },
            selectGame: {
                screen: GameSelector,
                navigationOptions: () => ({
                    title: 'Select game'
                })
            }
        });
class Nav extends Component {
    render() {
        return (<div>{"TODO: react router"}</div>);
    }
}
export default Nav;