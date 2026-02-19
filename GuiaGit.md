# Guia Rápido de Comandos Git

## 1\. ⚙️ Configuração Inicial

```bash
git config --global user.name "AlineAntuarte"
```

```bash
git config --global user.email "aline.ba@aluno.ifsc.edu.br"
```

> Salva as credenciais em cache por 4 horas (14400 segundos)
>
> ```bash
> git config --global credential.helper 'cache --timeout=14400'
> ```

-----

## 2\. 📂 Criar ou Obter um Repositório


* **Clonar um repositório remoto:**

    ```bash
    git clone <url-do-repositorio>
    ```

-----

## 3\. 💻 Ciclo de Trabalho Básico

### Preparar (Stage) e Confirmar (Commit)

* **Adicionar arquivos ao *stage***:
  * `git add <nome-do-arquivo>`: Adiciona um arquivo específico.
  * `git add .`: Adiciona **todos** os arquivos modificados no diretório atual e subdiretórios.
* **Confirmar as alterações**:
  * `git commit -m "Uma mensagem clara e descritiva"`: Salva o *snapshot* dos arquivos preparados no histórico do projeto.

-----

## 4\. 🔄 Sincronizar com o Repositório Remoto

* `git pull origin main`: Busca as alterações do repositório remoto (`origin`) na branch `main` e as mescla com sua branch local.
* `git push -u origin main`: Envia seus *commits* para a branch `main` remota. A flag `-u` cria um vínculo (*tracking*) entre a branch local e a remota na primeira vez.
* `git push`: Em `pushes` futuros, este comando já será suficiente.
