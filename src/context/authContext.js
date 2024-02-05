import { createContext , useState } from "react";

const authContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [ auth, setAuth ] = useState({});
    const [ user, setUser ] = useState({
        '_id':'',
        'answers': {},
        'comments':{},
        'email':'',
        'followers':{},
        'following':{},
        'name':'',
        'password':'',
        'questions':{},
        'views':{}
    });
    const [ updat, setUpdat ] = useState(0);
    const [ questionId , setQuestionId ] = useState('');

    return (
        <authContext.Provider value={{ auth, setAuth , user, setUser, updat, setUpdat, questionId, setQuestionId }}>
            {children}
        </authContext.Provider>
    )
}

export default authContext;