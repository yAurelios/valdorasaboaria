async function gravar(usuario) {
    let client = await getSupabaseClient();
    const { data, error } = await client.auth.signUp({
        email: usuario.email,
        password: usuario.senha,
    });
    usuario.id = data?.user?.id;
    if (error == null && usuario.id?.length > 0) {
        let { status, data, error } = await client.from('usuario').upsert(
            { 'id': usuario.id, 'nome': usuario.nome, 'email': usuario.email, 'senha': usuario.senha }
        ).select();
        //usuario.id = data[0]['id'];
        return error == null && (status == 200 || status == 201);
    }
    return false;
}

async function logar(usuario, senha) {
    let client = await getSupabaseClient();
    const { data, error } = await client.auth.signInWithPassword({
        email: usuario,
        password: senha ?? '',
    });

    if (error == null && data?.user?.id?.length > 0) {
        return true;
    }
    return false;
}