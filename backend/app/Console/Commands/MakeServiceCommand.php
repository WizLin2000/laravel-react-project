<?php

namespace App\Console\Commands;
use Illuminate\Support\Facades\File;
use Illuminate\Console\Command;

class MakeServiceCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:service {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '建立一個新的service類別';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $name=$this->argument('name');
        $path=app_path("Services/{$name}.php");

        if (File::exists($path)) {
            $this->error("Service {$name} 已存在！");
            return 0;
        }
        $stub = "<?php
namespace App\\Services;

class {$name}
{
    //
}
";

        File::ensureDirectoryExists(app_path('Services'));
        File::put($path, $stub);

        $this->info("Service {$name} 建立完成！");
    }
}
