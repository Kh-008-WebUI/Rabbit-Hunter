import React from 'react'

class MainField extends React.Component {
    render () {
        const {hare: {x, y}, hunters} = this.props
        return (
            <div className="main__field">
                <div className="field">
                    <div className="hare" style={{"top": y, "left": x}}></div>
                    {hunters.map( (hunter, index) => {
                        return (
                            <div
                                key={index}
                                className="hunter"
                                style={{"top": hunter.location.y, "left": hunter.location.x}}
                            >
                                {hunter.avatar ?
                                    <img src={hunter.avatar} alt=""/>:
                                    <p>{hunter.name}</p>
                                }
                            </div>
                        )
                    })}
                </div>
                <p>Look! I saw a hare: {x}-x and {y}-y!</p>
            </div>
        )
    }
}

export default MainField
