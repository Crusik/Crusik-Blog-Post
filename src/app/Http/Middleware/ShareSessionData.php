<?php

namespace App\Services;

use Illuminate\Session\SessionManager;

class FlashMessageService
{
    protected $session;

    public function __construct(SessionManager $session)
    {
        $this->session = $session;
    }

    public function success($message)
    {
        $this->session->flash('success', $message);
    }

    public function getSuccess()
    {
        return $this->session->get('success');
    }
}
