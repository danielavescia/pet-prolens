import java.util.Scanner;

import javax.swing.JOptionPane;

public class TesteFun4Study {
	
	public static Cidade c1, c2 = null;
	public static Estudante e1, e2, e3 ,e4;
	
	
	public static void main(String [] args) {
		
		c1 = new Cidade();
		c2 = new Cidade();
		e1 = new Estudante();
		e2 = new Estudante();
		e3 = new Estudante();
		e4 = new Estudante();
		boolean eativo = true;
		
		while (eativo) {
			Scanner input = new Scanner(System.in);	
			System.out.println("Digite a opcao desejada:");
			System.out.println("1. Cadastrar cidade");
			System.out.println("2. Cadastrar alunos");
			System.out.println("3. Cadastrar nova senha");
			System.out.println("4. Exibir dados do estudante");
			System.out.println("5. Exibir dados da cidade");
			System.out.println("6. Sair");
			System.out.println();
			System.out.println("Entre com a opcao desejada: ");
			
			int opcao = input.nextInt();
			System.out.println();
			
			switch (opcao) {
			
				case 1:
					if ((c1.getCodigo() == 0) && (c2.getCodigo() == 0)) {
						CadastrarCidades(c1);
						CadastrarCidades(c2);
						System.out.println("Cadastro realizado com sucesso!Suas cidades cadastradas são: " +c1.getDescricao() + " e "+ c2.getDescricao());
					} else {
						System.out.println("Cidades ja cadastradas!");
					}
					break;
				
				case 2: 
					CadastrarEstudantes(e1);
					CadastrarEstudantes(e2);
					CadastrarEstudantes(e3);
					CadastrarEstudantes(e4);
					System.out.println("Estudantes cadastrados com sucesso!");
					break;
				
				case 3:
					System.out.println("Digite qual estudante voce gostaria de trocar a senha(e1, e2, e3 ou e4): ");
					String opcaoEstudante = input.next();
					 
							
					if (opcaoEstudante.equals("e1")) {
						CadastrarSenhaEstudante(e1);
					} else if (opcaoEstudante.equals("e2")) {
						CadastrarSenhaEstudante(e2);
					} else if (opcaoEstudante.equals("e3")) {
						CadastrarSenhaEstudante(e3);
					} else if (opcaoEstudante.equals("e4")) {
						CadastrarSenhaEstudante(e4);
					} else
						System.out.println("Digite uma opção válida");
					
					break;
					
				case 4: 
					System.out.println("Digite qual estudante você gostaria de detalhar(e1, e2, e3 ou e4)");
					String visualizarEstudante = input.next();
				
					
					if (visualizarEstudante.equals("e1")) { 
						e1.exibeDados();
					} else if (visualizarEstudante.equals("e2")) { 
						e2.exibeDados();
					} else if (visualizarEstudante.equals("e3")) {
						e3.exibeDados();
					} else if (visualizarEstudante.equals("e4")) {
						e4.exibeDados();
					} else
						System.out.println("Digite um estudante válido");
					
					break;
					
				case 5:
					System.out.println("Digite qual cidade você gostaria de detalhar(c1 ou c2)");
					
					String visualizarCidade = input.next();
					
					if (visualizarCidade.equals("c1")) { 
						
						c1.ExibeDados();
					} else if (visualizarCidade == "c2") {
						c2.ExibeDados();
					} else
						System.out.println("Digite uma cidade válida");
					
					break;
					
				case 6:
					System.out.println("Obrigada por utilizar nosso sistema!");
					eativo = false;
					break;
					
				default: break;
			
			}	
		} 
	}
	
	public static void CadastrarEstudantes(Estudante estudante) {
		Scanner input = new Scanner(System.in);	
		
		System.out.println("Digite o codigo (numero inteiro) do estudante: ");
		estudante.setCodigo(input.nextInt());
		input.nextLine();
		
		System.out.println("Digite seu nome completo: ");
		estudante.setNome(input.nextLine());		
		
		
		System.out.println("Digite sua data de nascimento: ");
		estudante.setDataNascimento(input.nextLine());		
	
		System.out.println("Digite seu e-mail: ");
		estudante.setEmail(input.nextLine());	
		
		System.out.println("Digite sua senha: ");
		estudante.setSenha(input.nextLine());	
		
		System.out.println("Digite o nome da cidade: " + c1.getDescricao() + " ou " + c2.getDescricao());
		Scanner input2 = new Scanner(System.in);	
		String cidadetemp = input2.nextLine();
		if (cidadetemp.equals(c1.getDescricao())) {
			estudante.setCidade(c1);
		} else if (cidadetemp.equals(c2.getDescricao())){
			estudante.setCidade(c2);
		} else {
			System.out.print(cidadetemp);
			System.out.print(c1.getDescricao());			
			System.out.println("Cidade nao cadastrada!");
		}
		
	}
	
	
	public static void CadastrarCidades(Cidade cidade) {
		
		Scanner input = new Scanner(System.in);	
		
		System.out.println("Digite o codigo (numero inteiro) da cidade: ");
		cidade.setCodigo(input.nextInt());
		input.nextLine();
		
		System.out.println("Digite a descricao: ");
		cidade.setDescricao(input.nextLine());		
		
		
		System.out.println("Digite a Unidade Federativa(UF): ");		
		cidade.setUf(input.nextLine());		
		
		
		System.out.println("Digite a quantidade de alunos (numero inteiro): ");
		cidade.adicionaNovoEstudante(input.nextInt());
		
	}
	public static void CadastrarSenhaEstudante(Estudante estudante) {
		
		Scanner input = new Scanner(System.in);	
		
		String senhaAtual = estudante.getSenha();
		System.out.println("Digite sua senha atual: ");
		String senhaCompara = input.next();
		String senhatemporaria = "", senhatemporaria2 = "";
		boolean comparacaoSenha = senhaAtual.equals(senhaCompara);
		
		if(comparacaoSenha == true) {
			System.out.println("Por favor, digite sua nova senha: ");
			senhatemporaria = input.next();
		} else {
			System.out.println("Senha incorreta! Por favor, digite sua senha: ");
			return;
		} 		
				
		System.out.println("Por favor, repita sua nova senha: ");
		senhatemporaria2 = input.next();

		if (senhatemporaria.equals(senhatemporaria2)) {
			estudante.setSenha(senhatemporaria2);
			System.out.println("Senha cadastrada com sucesso!");
			
		} else {
			System.out.println("As senhas nao batem, por favor repita!");
			CadastrarSenhaEstudante(estudante);
		}
		
		return;
	}
}
		
		
