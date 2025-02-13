"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
let LoginService = class LoginService {
    getLogin() {
        return ` <div class="form-wrapper">
     <form class="mt-4" action="#" method="POST">
            <!-- Campo de E-mail -->
            <div class="mb-4">
              <label for="email" class="block text-gray-600">E-mail</label>
              <input type="email" id="email" name="email" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" required>
            </div>
            <!-- Campo de Senha -->
            <div class="mb-6">
              <label for="password" class="block text-gray-600">Senha</label>
              <input type="password" id="password" name="password" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" required>
               <div class="mt-2 text-sm ">
              <a href="#" class="text-green-600 hover:underline">Esqueceu a senha ?</a>
            {{{message}}}
            </div>
            </div>
            <!-- Botão de Login -->
            <button type="submit" class="w-full py-3 bg-green-600  text-white font-semibold rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-600">
              Entrar
            </button>
            <!-- Link para Cadastro -->
            <div class="mt-4 text-center">
              <button id="register-btn" class="text-green-600 hover:underline" > Criar uma conta</button>
            </div>
           <div class="border-b border-neutral-300 my-4"></div>
            <div class="w-full flex justify-center mt-4">
                <img class="w-[24px] h-[24px] mt-1" src="/assest/logo-google.png" alt="Entrar com conta Google">
                <img class="w-[30px] h-[30px] ml-4" src="/assest/logo-outlook.svg" alt="Entrar com conta Outlook">
            </div>
          </form>
    </div> `;
    }
    getRegisterScript() {
        return `
      document.getElementById('register-btn').addEventListener('click', function() {
        fetch('/auth/register')
          .then(response => response.text())
          .then(html => {
            document.querySelector('.form-wrapper').innerHTML = html;  // Substitui o formulário
          });
      });
    `;
    }
};
exports.LoginService = LoginService;
exports.LoginService = LoginService = __decorate([
    (0, common_1.Injectable)()
], LoginService);
//# sourceMappingURL=login.service.js.map