import React from 'react'
import Avatar from 'react-avatar'

const Contact = ({ contact }) => {
    return (
        <tr>
            <td>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <label className="custom-control-label"></label>
                </div>
            </td>
            <td><Avatar className="mr-5" name={contact.name} size="45" round={true} />{contact.name}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
            <td className="actions">
                <a href="#">
                    <span className="material-icons mr-2">edit</span>
                </a>
                <a href="#">
                    <span className="material-icons text-danger">remove_circle</span>
                </a>
            </td>
        </tr>
    )
}

export default Contact
