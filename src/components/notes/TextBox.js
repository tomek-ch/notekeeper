import React from 'react';
import {Redirect} from 'react-router-dom';

import { Context } from '../../context/NotesContext';
import Time from './Time';

class TextBox extends React.Component {
    
    textBox = React.createRef();

    componentDidMount = () => {
        this.context.setCurrentNoteId(this.props.id);

        const note = this.context.getCurrentNote(this.props.id);
        if (note) this.setState({
            text: note.text,
            time: <Time timestamp={note.time} />,
        });
        else if (!this.props.isNewNote) this.setState({
            redirect: <Redirect to='/notes/new-note' />,
            text: '',
        });
        if (!note) this.setState({
            text: '',
            time: <Time timestamp={(new Date())} />,
        });

        this.textBox.current.focus();

        setTimeout(() => this.setState(prevState => ({
            ...prevState,
            height: this.textBox.current.scrollHeight + 'px',
        })), 0)
    }

    state = {
        text: '',
        redirect: null,
        time: null,
        height: '',
    }

    handleChange = e => {
        const {value} = e.target;
        this.setState({text: value});
        this.setState(prevState => ({
            ...prevState,
            height: this.textBox.current.scrollHeight + 'px',
        }));
    }

    componentWillUnmount() {
        const { text } = this.state;
        this.context.updateNotes(text);
    }

    render() {
        return (
            <>
                {this.state.redirect}
                <div className='note-info'>
                    {this.state.time}
                    <div className='length'>
                        {`| ${this.state.text.length} characters`}
                    </div>
                </div>
                <textarea
                    value={this.state.text}
                    onChange={this.handleChange}
                    className='note-textbox'
                    ref={this.textBox}
                    style={{height: this.state.height}}
                    spellCheck='false'
                />
            </>
        );
    }
}

TextBox.contextType = Context;

export default TextBox;