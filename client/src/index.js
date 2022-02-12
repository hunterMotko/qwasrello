import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class TaskbarBtn extends React.Component {
    render(){
        return (<button
            className="taskbtn"
            onClick={() => {
                this.props.func()}}
        >
            {this.props.text}
        </button>);
    }
}
class Taskbar extends React.Component {
    render(){
        return (
            <div className="taskbar">
                {this.props.title}
                <TaskbarBtn text="+" func={this.props.addFunc}/>
                <TaskbarBtn text="-" func={this.props.minFunc}/>
            </div>
        )
    }
}

class Task extends React.Component {

    render(){
        return(
            <div className="column">
                {this.props.name}
            </div>
        );
    }
}

class Column extends React.Component {
    /*renderTasks(){
        var tasks = [];
        for (var i = 0; i < this.props.myTasks.length; i++) {
            tasks.push(<Task key={myTasks[i]}/>);
        }
        return (<div>{tasks}</div>);
    }*/

    render() {
      return (
        <div className="column">
            <Taskbar 
            title={this.props.name} 
            addFunc={() => {}}//this.addTask(this.key)}
            minFunc={() => {}}
            />

        </div>
      );
    }
}
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cols: Array(4).fill(null),
            tasks: Array(0),
        };
    }

    addcol(){
        this.setState(prevState => ({
            cols: [...prevState.cols, null]
        }));
    }

    mincol(){
        this.setState(prevState => ({
            cols: prevState.cols.filter((el, index) => index !== (prevState.cols.length-1))
        }));
    }

    /*
    addTask(col){
        let key = 0;
        this.setState(prevState => ({
            tasks: [...prevState.tasks, {col: col, key: prevState.tasks.length, text: "New task"}]
        }));
    }

    minTask(col){
        //todo
    }
    */

    renderTaskbar(i) {
        return (
        <Taskbar 
        title={i}
        addFunc={() => this.addcol()}
        minFunc={() => this.mincol()}
        />);
    }

    renderCols(x){
        var cols = [];
        for (var i = 0; i < x.length; i++) {
            cols.push(<Column name="New Col" key={i}/>);
        }
        return (<div>{cols}</div>);
    }
  
    render() {
      return (
        <div className="board">
            {this.renderTaskbar("Your Board's Name Here")}
            <div className="board-row">
                {this.renderCols(this.state.cols)}
            </div>
            {this.state.cols.length}
        </div>
        
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Board />,
    document.getElementById('root')
  );
  