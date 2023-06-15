
public class Estudante {

	//ATRIBUTOS
	private int codigo;
	private String nome;
	private String dataNascimento;
	private String email;
	private String senha;
	private Cidade cidade;
	private Cidade qntEstudantes;
	
	//CONSTRUTOR ESTUDANTE
	public Estudante(int codigo, String nome, String dataNascimento, String email,String senha, Cidade cidade, Cidade qntEstudantes) {
		this.codigo = codigo;
		this.nome = nome;
		this.dataNascimento = dataNascimento;
		this.email = email;
		this.senha = senha;
		this.cidade = cidade;
		this.qntEstudantes = qntEstudantes;
	}
	
	public Estudante() {}
	//METODOS GET E SET
	public int getCodigo() {
		return codigo;
	}

	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getDataNascimento() {
		return dataNascimento;
	}
	public void setDataNascimento(String dataNascimento) {
		this.dataNascimento = dataNascimento;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	public Cidade getCidade() {
		return cidade;
	}
	public void setCidade(Cidade cidade) {
		this.cidade = cidade;
	}

	public void exibeDados() {
		System.out.println("Nome: " + getNome());
		System.out.println("Nome: " + getDataNascimento());
		System.out.println("Nome: " + getEmail());
		System.out.println("Nome: " + getSenha());
		System.out.println("Nome: " + getCidade());
		
		
	}
	
	
	
	
}
