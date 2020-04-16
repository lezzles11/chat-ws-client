import React, { Component } from 'react';

import { connect } from 'react-redux';

const robotMessage = [
	{
		
	}
]

class ChatHistory extends Component {

    render() {
        const style = {
            backgroundColor: '#eaeaea',
            padding: 15,
            height: '420px',
            overflowY: 'scroll',
            display: 'flex',
            flexDirection: 'column'
        };

		const msgs = this.props.messages.map((message, i) => 
            this.renderMessages(message, i)
		)
		const robot = this.props.messages.map((message, i) => 
			this.robotMessages(message, i)
		)

        return (
            <div style={style}>

				{robot}
                {msgs}

				{console.log(robot)}
            </div>
        )
	}
	robotMessages(message, i) {
        const style = {
            display: 'block',
            margin: '5px 0'
        };

        const isMe = this.props.thisUser.name === message.user.name;
        const floatDirection = isMe ? 'left' : 'right'
        const nameColor = isMe ? 'red' : 'green';
        const margin = isMe ? '0 40px 0 0' : '0 0 0 40px';

        const textStyle = {
            float: floatDirection,
            backgroundColor: '#fff',
            padding: '6px 10px',
            borderRadius: '15px',
            margin: margin,
            textAlign: 'left'
        }

        const nameStyle = {
            color: nameColor,
            float: floatDirection
		}
		
		const robot = {
			data1: "Type in [1] to search for a word",
			data2: "Type in [2] to search for a range",
			data3: "Type in [3] to search for a range and a word",
			data4: "Type in [4] to look at your chat history",
			data5: "Type in [5] to exit"
		}
        return (
            <div key={i} style={style}>
                <span style={textStyle}>
                    <span style={nameStyle}>Bot</span>
                    <br />
					{robot.data1} <br />
					{robot.data2} <br />
					{robot.data3} <br />
					{robot.data4} <br />
					{robot.data5}<br/ >
                </span>
            </div>
        );
    }

    renderMessages(message, i) {
        const style = {
            display: 'block',
            margin: '5px 0'
        };

        const isMe = this.props.thisUser.name === message.user.name;
        const floatDirection = isMe ? 'right' : 'left'
        const nameColor = isMe ? 'green' : 'red';
        const margin = isMe ? ' 0 0 0 40px' : '0 40px 0 0 ';

        const textStyle = {
            float: floatDirection,
            backgroundColor: '#fff',
            padding: '6px 10px',
            borderRadius: '15px',
            margin: margin,
            textAlign: 'left'
        }

        const nameStyle = {
            color: nameColor,
            float: floatDirection
        }
		const robot = {
			data: "You typed in 1",
			data1: "You type in 2"
		}
        return (
            <div key={i} style={style}>
                <span style={textStyle}>
                    <span style={nameStyle}>{message.user.name}</span>
                    <br />
					{message.data}
                    {message.data === "1" && robot.data }

                    {message.data === "2" && robot.data1 }
                </span>
            </div>
        );
    }
}


// Whatever is returned is going to show up as props inside UserList
function mapStateToProps(state) {
    return {
        messages: state.messages,
        thisUser: state.thisUser
    }
}

// Promote component to container
export default connect(mapStateToProps)(ChatHistory);



