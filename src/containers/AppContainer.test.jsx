import React from 'react';
import { screen, render, waitFor, getByText, getByLabelText } from '@testing-library/react'
import userEvent  from '@testing-library/user-event'
import AppContainer from './AppContainer';
import {setupServer} from 'msw/node'
import { rest } from 'msw';
import { exact } from 'prop-types';

const server = setupServer(
    rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => {
        return res(ctx.json([
            {
              "quote": "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
              "character": "Lisa Simpson",
              "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
              "characterDirection": "Right"
            }
          ]))
    })
)
describe('AppContainer', ()=>{
    beforeAll(()=> server.listen());
    afterAll(()=> server.close());

    it('should render a list of requests made', async () =>{
        render(<AppContainer/>)

        // const ul = await screen.findByRole('list', {name: 'requests'})
        
        const urlBar = screen.getByPlaceholderText('Enter URL')
        userEvent.type(urlBar,'https://thesimpsonsquoteapi.glitch.me/quotes')
        
        const getButton = screen.getByTestId('get-button')
        userEvent.click(getButton);

        const go = await screen.findByRole('button',{name:'go-button'})
        userEvent.click(go)

        
        return waitFor(()=>{
            const ul = screen.getByRole('list', {name:'requests'});
            expect(ul).not.toBeEmptyDOMElement()
            expect(ul).toMatchSnapshot()
        })
    })
})
