# material-dialog-provider

Dialog manager for Material Dialog

# usage

```
import ModalProvider from "material-dialog-provider";


const App = () => {
    return (
        <ModalProvider>
            <ComponentDemo>
        </ModalProvider>
    )
}


const ComponentDemo = () => {
    const modal = useContext(ModalContext);

    modal.confirm({ title: '', description: ''})
}
```
