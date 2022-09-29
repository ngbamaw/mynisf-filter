import { FileDownload, FileUpload } from '@mui/icons-material';
import React from 'react'
import {useDropArea} from 'react-use';
import StyledDropZone from './style';
import UserTable from './UserTable';

type OnFileCallback = (files: File[]) => void

enum FilterType {
    NUMBER,
    LIST,
}

const filtersList = [
    {
        property: 'id',
        name: 'Identifiant',
        type: FilterType,

    },
]

const App = () => {
    const [data, setData] = React.useState<any>(null);

    const onFiles: OnFileCallback = ([file]) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            if (!e.target) {
                throw new Error('Uplaod fail');
            }
            setData(JSON.parse(e.target!.result as string));
        };
        reader.readAsText(file);
    };

    const [bond, state] = useDropArea({
        onFiles,
        onUri: (uri) => console.log('uri', uri),
        onText: (text) => console.log('text', text),
    });
    

    return (
        <>
            {data ? (
                <UserTable data={data} />
            ) : (
                <StyledDropZone {...bond}>
                    {state.over ? (
                        <>
                            <FileUpload fontSize="large" />
                            <p>Dropping something</p>
                        </>
                    ) : (
                        <>
                            <FileDownload fontSize="large" />
                            <p>Drop something here.</p>
                        </>
                    )}
                </StyledDropZone>
            )}
        </>
    );
};

export default App