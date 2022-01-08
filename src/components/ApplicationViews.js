import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList.js";
import { GameForm } from "./game/GameForm.js";
import { GameProvider } from "./game/GameProvider.js";
import { EventList } from "./event/EventList.js";
import { EventForm } from "./event/EventForm.js";
import { EventProvider } from "./event/EventProvider.js";

export const ApplicationViews = () => {
    return (
        <>
            <main style={{
                margin: "5rem 2rem",
                lineHeight: "1.75rem",
                backgroundColor: "lightgoldenrodyellow"
            }}>
                <GameProvider>
                    <Route exact path="/">
                        <GameList />
                    </Route>
                    <Route exact path="/games/new">
                        <GameForm />
                    </Route>
                </GameProvider>

                <EventProvider>
                    <Route exact path="/">
                        <EventList />
                    </Route>
                    <Route exact path="/events/new">
                        <EventForm />
                    </Route>
                </EventProvider>
            </main>
        </>
    );
};
