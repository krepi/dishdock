const Create = () => (
    <>
        <h1>Create</h1>
        <form action="recipe/save" method="POST">
            <label htmlFor="name">name</label>
            <input type="text" id='name' name='name'/>
            <label htmlFor="">ingredients</label>
            <input type="text"/>
            <label htmlFor="">steps</label>
            <input type="text"/>
            <label htmlFor="">kalories</label>
            <input type="text"/>
            <label htmlFor="">servings</label>
            <input type="text"/>
            <label htmlFor="">tips</label>
            <input type="text"/>
            <button type="submit">Submit</button>
        </form>

    </>
)