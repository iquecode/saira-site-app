import Header from "./Header"
import Footer from "./Footer"
import Body from "./Body"
import Content from "./Content"

interface LayoutProps {
    title?: string
    subtitle?: string
    children?: any 
 }

export default function Layout(props: LayoutProps) {
    return (
        <>
            <Header />
            <Content>
                        {props.children}    
            </Content>    
            <Footer />
        </>
    )
}