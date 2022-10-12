import React from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar, } from '@syncfusion/ej2-react-richtexteditor';
import { EditorData } from '../data/dummy';
import { Header } from '../components';

const Editor = () => {

        return (
            <div className='m-2 md:m-10 p-2 md:p-10 mt-24 bg-white dark:bg-secondary-dark-bg rounded-3xl' >
                <Header category='App' title='Editor' />
                <RichTextEditorComponent>
                    <EditorData />
                    <Inject services={[ Image, Link, HtmlEditor, QuickToolbar, Toolbar, ]} />
                </RichTextEditorComponent>
            </div>
        )
    }


export default Editor;