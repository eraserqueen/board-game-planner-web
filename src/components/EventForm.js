import _ from 'lodash';
import React, {Component} from 'react';
import {formatDateTime} from '../utils/dateUtils';
import buttonStyles from '../styles/button';
import formStyles from '../styles/form';
import Button from "./Button";
import connect from "react-redux/es/connect/connect";
import {deleteEvent, generateSchedule, resetSchedule, saveEvent} from "../actions/events";

const styles = ({
    ...buttonStyles,
    ...formStyles
});

class EventForm extends Component {
    state = {
        ...this.props.event,
        showDatePicker: false,
        datePickerTarget: null,
        datePickerInitialValue: new Date(),
        datePickerMinimumDate: new Date(),
    };

    handleDatePress = (datePickerTarget) => {
        let datePickerInitialValue = new Date();
        let datePickerMinimumDate = new Date();
        if (this.state[datePickerTarget]) {
            datePickerInitialValue = new Date(this.state[datePickerTarget]);
        }
        if (datePickerTarget == 'dateTimeEnd') {
            datePickerMinimumDate = this.state.dateTimeStart || new Date();
            datePickerInitialValue = new Date(Math.max(datePickerInitialValue.valueOf(), this.state.dateTimeStart.valueOf()));
        }
        this.setState({
            showDatePicker: true,
            datePickerTarget,
            datePickerInitialValue,
            datePickerMinimumDate
        });
    };
    handleDatePicked = (value) => {
        const newState = {
            showDatePicker: false,
            datePickerTarget: '',
            datePickerInitialValue: new Date()
        };
        newState[this.state.datePickerTarget] = new Date(value);
        this.setState(newState);
    };
    handleDatePickerHide = () => {
        this.setState({showDatePicker: false, datePickerTarget: ''});
    };
    handleAddPress = () => {
        this.props.saveEvent({
            dateTimeStart: this.state.dateTimeStart,
            dateTimeEnd: this.state.dateTimeEnd
        });
        this.props.navigation.goBack();
    };
    handleDeletePress = () => {
        this.props.deleteEvent(this.state.id);
        this.props.navigation.goBack();
    };
    handleGenerateSchedulePress = () => {
        this.props.generateSchedule(this.props.event);
        this.props.navigation.goBack();
    };
    handleResetSchedulePress = () => {
        this.props.resetSchedule(this.props.event);
        this.props.navigation.goBack();
    };

    render() {
        return (
            <div style={{flex: 1, flexDirection: 'column'}}>
                <div style={styles.fieldContainer}>
                    <input type="text"
                        key="dateTimeStart"
                        style={styles.textInput}
                        placeholder="Event start"
                        spellCheck={false}
                        value={formatDateTime(this.state.dateTimeStart)}
                        editable={!this.state.showDatePicker}
                        onFocus={() => this.handleDatePress('dateTimeStart')}
                    />
                    <input type="text"
                        key="dateTimeEnd"
                        style={styles.textInput}
                        placeholder="Event end"
                        spellCheck={false}
                        value={formatDateTime(this.state.dateTimeEnd)}
                        editable={!this.state.showDatePicker}
                        onFocus={() => this.handleDatePress('dateTimeEnd')}
                    />
                    TODO: datetime picker
                    {/*<DateTimePicker*/}
                        {/*isVisible={this.state.showDatePicker}*/}
                        {/*mode="datetime"*/}
                        {/*onConfirm={this.handleDatePicked}*/}
                        {/*onCancel={this.handleDatePickerHide}*/}
                        {/*date={this.state.datePickerInitialValue}*/}
                        {/*minimumDate={this.state.datePickerMinimumDate}*/}
                    {/*/>*/}
                </div>
                <Button onPress={this.handleAddPress} style={styles.createButton}
                        text={this.state.id ? 'Update' : 'Add'}/>

                {this.props.canResetSchedule &&
                <Button onPress={this.handleResetSchedulePress} style={styles.deleteButton}
                        text="Reset schedule"/>}
                {this.props.canGenerateSchedule &&
                <Button onPress={this.handleGenerateSchedulePress} style={styles.createButton}
                        text="Generate schedule"/>
                }
                {this.props.canDeleteEvent &&
                <Button onPress={this.handleDeletePress}
                        style={styles.deleteButton}
                        text="Delete"
                />}
            </div>

        );
    }
}

const mapStateToProps = (state, {navigation}) => {
    let event = navigation.state.params;
    return {
        canDeleteEvent: !!event,
        canResetSchedule: event && !_.isEmpty(event.schedule),
        canGenerateSchedule: event && _.isEmpty(event.schedule) && (event.playerPreferences || []).filter(p => p.gameId).length > 0,
        event,
        navigation
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveEvent: (event) => {
            dispatch(saveEvent(event));
        },
        deleteEvent: (eventId) => {
            dispatch(deleteEvent(eventId));
        },
        generateSchedule: (event) => {
            dispatch(generateSchedule(event));
        },
        resetSchedule: (event) => {
            dispatch(resetSchedule(event));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(EventForm);