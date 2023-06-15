
public class Cidade {

	//ATRIBUTOS
	private int codigo;
	private String descricao;
	private String uf;
	private int qntEstudantes;
	
	//CONSTRUTOR CIDADE
	public Cidade(int codigo, String descricao, String uf) {
		this.codigo = codigo;
		this.descricao = descricao;
		this.uf = uf;
		this.qntEstudantes = 0;
	}
	
	public Cidade() {}
	
	//METODOS GET E SET
	public int getCodigo() {
		return codigo;
	}
	
	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}	

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	public String getUf() {
		return uf;
	}

	public void setUf(String uf) {
		this.uf = uf;
	}
		
	public void adicionaNovoEstudante(int qntEstudantes) {
			qntEstudantes =  qntEstudantes + 1;
		}
	
	
	//METODO EXIBE INFOS DA CLASSE
	public void ExibeDados() {
	System.out.println("Codigo = " + getCodigo());
	System.out.println("Descricao = " + getDescricao());
	System.out.println("Codigo = " + getUf());
	System.out.println("Codigo = " + qntEstudantes);	
}

		
	}

	

	

	
