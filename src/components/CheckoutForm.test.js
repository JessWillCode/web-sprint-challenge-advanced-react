import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

test("renders without errors", () => {
    render(<CheckoutForm/>);
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm/>);

    const firstName= screen.getByLabelText(/first name:/i);
    const lastName= screen.getByLabelText(/last name:/i);
    const address= screen.getByLabelText(/address:/i);
    const city= screen.getByLabelText(/city:/i);
    const state= screen.getByLabelText(/state:/i);
    const zip= screen.getByLabelText(/zip:/i);
    const submit = screen.getByRole('button');

    userEvent.type(firstName, 'jess');
    userEvent.type(lastName, 'kitch');
    userEvent.type(address, '123 sesame street');
    userEvent.type(city, 'orlando');
    userEvent.type(state, 'fl');
    userEvent.type(zip,'12345');
    userEvent.click(submit);


    waitFor(async () => {
        const successMessage = await screen.findByTestId('successMessage');

        expect(successMessage).toBeInTheDocument();
    })
});
