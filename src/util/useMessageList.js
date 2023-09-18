import useMessages from "../setup/hooks/useMessages";
export const useMessageList = () => {
    const { messages, setMessages } = useMessages();

    function addMessage(message) {
        setMessages(prev => [...prev, message]);
    }
    function removeMessage() {
        // const newMessageList = messages.filter((obj, i) => i != (messages.length-1))
        const newMessageList = messages;
        console.log(newMessageList);
        newMessageList.pop();
        console.log('element popped')
        setMessages([...newMessageList]);
    }
    function removeAll() {
        setMessages([
          {
            input: "",
            output: "",
            time: 0,
            catalog: [
              {
                name: "",
                pid: "",
                image: "",
                price: 0,
                link: "",
              },
            ],
          },
        ]);
    }
    function fillMessages(newMessageList) {
        setMessages([...newMessageList]);
    }
    return { addMessage, removeMessage,removeAll, fillMessages };
}