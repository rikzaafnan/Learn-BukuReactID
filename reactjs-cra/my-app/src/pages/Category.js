import React from 'react'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'


const Category = () => {

    let match = useRouteMatch()

    console.log(match)

    return (
        <div>
            <h2>Halaman Category</h2>
            <ul>
                <li><Link to={`${match.url}/foods`} > Foods </Link></li>
                <li><Link to={`${match.url}/drinks`} > Drinks </Link></li>
            </ul>
            <hr/>
            <Switch>
                <Route path={`${match.url}/foods`} >
                    List of foods: bakso, satem soto, dll.
                </Route>
                <Route path={`${match.url}/drinks`}>
                    List of drink: air mineral, es teh, kopi, dll.
                </Route>
            </Switch>
        </div>
    )
}

export default Category