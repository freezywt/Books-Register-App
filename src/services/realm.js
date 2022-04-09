import Realm from "realm";
import BooksSchema from '../Schemas/BookSchema';

export default function getRealm(){
    return Realm.open({
        schema: [BooksSchema]
    });
}