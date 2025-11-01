const useCustomCookie = () => {
    Object.defineProperty(document, "myCookie", {
        configurable: true,
        set(value){
            document.cookie = value;
            return true

        },
        get(){
            return document.cookie
        }
    })
}
useCustomCookie();

document.myCookie = "name=Jatin;max-age=1"
document.myCookie = "blog=new"

console.log(document.myCookie);