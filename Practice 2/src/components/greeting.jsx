import React from "react";

const GreetUser = ({name, isPremium}) => {
    return(
        <div>
            <h1>Hi, {name}!</h1>
            <p>{isPremium ? "Welcome to your premium membership" : "Upgrade for premium status"} </p>
        </div>
    )
}
export default GreetUser;